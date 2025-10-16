import React from "react";

const Home = () => {
  return (
    <div className="landing-container">
      <section className="hero-section" style={{ background: "linear-gradient(135deg, #4e54c8, #8f94fb)", color: "#fff", padding: "4rem", borderRadius: "12px", marginBottom: "2rem" }}>
        <h1>Welcome to the E-Book Library</h1>
        <p>Discover thousands of books across categories. Sign in to start reading now!</p>
      </section>
      <section>
        <h2>Featured Books</h2>
        <p>Coming soon...</p>
      </section>
    </div>
  );
};

export default Home;