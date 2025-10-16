import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We will get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
        <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required style={{ width: "100%", marginBottom: "0.5rem", padding: "0.5rem" }} />
        <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required style={{ width: "100%", marginBottom: "0.5rem", padding: "0.5rem" }} />
        <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required style={{ width: "100%", marginBottom: "0.5rem", padding: "0.5rem" }} />
        <button type="submit" style={{ backgroundColor: "#ff6e7f", color: "#fff", border: "none", padding: "0.75rem 1.5rem", borderRadius: "8px", cursor: "pointer" }}>Send</button>
      </form>
    </div>
  );
};

export default Contact;