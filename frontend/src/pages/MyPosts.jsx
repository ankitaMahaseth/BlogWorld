import { useEffect, useState } from "react";
import API from "../services/api";
import PostCard from "../components/PostCard";

function MyPosts() {
  const [posts, setPosts] = useState([]);

  const fetchMyPosts = async () => {
    try {
      const { data } = await API.get("/posts/my-posts");
      setPosts(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMyPosts();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this post?")) {
      return;
    }

    try {
      await API.delete(`/posts/${id}`);
      fetchMyPosts();
    } catch (error) {
      alert(error.response?.data?.message || "Delete failed");
    }
  };

  return (
    <div>
      <h1 className="section-title">My Blogs</h1>

      {posts.length === 0 ? (
        <p>You haven't published any blogs yet.</p>
      ) : (
        <div className="post-list">
          {posts.map((post) => (
            <PostCard
              key={post._id}
              post={post}
              showActions
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default MyPosts;