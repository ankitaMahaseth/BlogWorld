import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../services/api";

function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    content: ""
  });

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data } = await API.get(`/posts/${id}`);

        setForm({
          title: data.title,
          content: data.content
        });
      } catch (error) {
        alert("Unable to load blog");
      }
    };

    fetchPost();
  }, [id]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.put(`/posts/${id}`, form);
      alert("Blog updated successfully!");
      navigate("/my-posts");
    } catch (error) {
      alert(error.response?.data?.message || "Update failed");
    }
  };

  return (
    <div className="form-page">
      <h1>Edit Blog</h1>

      <form onSubmit={handleSubmit} className="post-form">
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          required
        />

        <textarea
          name="content"
          rows="12"
          value={form.content}
          onChange={handleChange}
          required
        />

        <button type="submit">Update Blog</button>
      </form>
    </div>
  );
}

export default EditPost;