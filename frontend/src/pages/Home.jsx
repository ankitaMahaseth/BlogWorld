import { useEffect, useState } from "react";
import API from "../services/api";
import PostCard from "../components/PostCard";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await API.get("/posts");
        setPosts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <section className="hero">
        <h1>Welcome to My Blog World</h1>
      </section>

      <h2 className="section-title">Latest Blogs</h2>

      {loading ? (
        <p>Loading blogs...</p>
      ) : posts.length === 0 ? (
        <p>No blogs available yet.</p>
      ) : (
        <div className="post-list">
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
