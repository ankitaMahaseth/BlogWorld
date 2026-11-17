import { Link } from "react-router-dom";
import { FaHome, FaPen, FaBookOpen, FaUser } from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>Explore</h3>

      <Link to="/">
        <FaHome /> Home
      </Link>

      <Link to="/create">
        <FaPen /> Write a Blog
      </Link>

      <Link to="/my-posts">
        <FaBookOpen /> My Posts
      </Link>
    </aside>
  );
}

export default Sidebar;
