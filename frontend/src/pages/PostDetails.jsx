import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data } = await API.get(`/posts/${id}`);
        setPost(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) return <p>Loading blog...</p>;

  return (
    <article className="post-details">
      <h1>{post.title}</h1>

      <p className="post-meta">
        Written by {post.author?.name || "Unknown"} |
        {" "}{new Date(post.createdAt).toLocaleDateString()}
      </p>

      <div className="post-content">
        {post.content}
      </div>
    </article>
  );
}

export default PostDetails;