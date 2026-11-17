import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function CreatePost() {
  const [form, setForm] = useState({
    title: "",
    content: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/posts", form);

      alert("Blog published successfully!");
      navigate("/my-posts");

    } catch (error) {
      alert(error.response?.data?.message || "Unable to publish blog");
    }
  };

  return (
    <div className="form-page">
      <h1>Write Your Blog</h1>

      <form onSubmit={handleSubmit} className="post-form">
        <input
          name="title"
          placeholder="Enter Blog Title"
          value={form.title}
          onChange={handleChange}
          required
        />

        <textarea
          name="content"
          placeholder="Write your story here..."
          value={form.content}
          onChange={handleChange}
          rows="12"
          required
        />

        <button type="submit">Publish Blog</button>
      </form>
    </div>
  );
}

export default CreatePost;