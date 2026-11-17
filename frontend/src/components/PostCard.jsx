import { Link } from "react-router-dom";

function PostCard({ post, onDelete, showActions = false }) {
  return (
    <article className="post-card">
      <div className="post-meta">
        <span>By {post.author?.name || "Unknown"}</span>
        <span>{new Date(post.createdAt).toLocaleDateString()}</span>
      </div>

      <h2>{post.title}</h2>

      <p>
        {post.content.length > 160
          ? post.content.substring(0, 160) + "..."
          : post.content}
      </p>

      <div className="post-actions">
        <Link to={`/post/${post._id}`} className="read-more">
          Read More →
        </Link>

        {showActions && (
          <>
            <Link to={`/edit/${post._id}`}>Edit</Link>
            <button onClick={() => onDelete(post._id)}>Delete</button>
          </>
        )}
      </div>
    </article>
  );
}

export default PostCard;
