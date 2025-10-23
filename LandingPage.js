import React from "react";
import Image from "../Images/Book-icon.jpg";

export default function LandingPage() {
  return (
    <div style={{ backgroundColor: "#000", color: "white", overflowX: "hidden" }}>
      {/* ===================== NAVBAR ===================== */}
      <div
        className="fixed-top shadow-sm"
        style={{
          background: "linear-gradient(90deg, #004e92 0%, #000428 100%)",
          zIndex: 1030,
        }}
      >
        <nav className="navbar navbar-expand-lg navbar-dark py-3">
          <div className="container-fluid">
            {/* Brand */}
            <a
              className="navbar-brand d-flex align-items-center ms-lg-3 fs-3 fw-bold"
              href="#home"
            >
              <img
                src={Image}
                alt="Logo"
                width="50"
                height="50"
                className="me-2"
              />
              <span style={{ color: "#00d4ff", fontFamily: "Orbitron" }}>BOOK</span>
              <span style={{ color: "#ff8a00", fontFamily: "Playfair Display" }}>VERSE</span>
            </a>

            {/* Toggle for Mobile */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Links */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto text-center h5 my-2 my-lg-0">
                <li className="nav-item mx-lg-3">
                  <a className="nav-link" href="#home">Home</a>
                </li>
                <li className="nav-item mx-lg-3">
                  <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item mx-lg-3">
                  <a className="nav-link" href="#contact">Contact</a>
                </li>
              </ul>

              {/* Buttons */}
              <div className="d-flex justify-content-center justify-content-lg-end mt-2 mt-lg-0">
                <a href="#login" className="btn btn-outline-info me-2 px-3 rounded-pill fw-semibold">
                  Login
                </a>
                <a href="#signup" className="btn btn-warning text-dark px-3 rounded-pill fw-semibold">
                  Signup
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* ===================== HOME SECTION ===================== */}
      <section
        id="home"
        className="d-flex flex-column justify-content-center align-items-center text-center"
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
          paddingTop: "90px",
        }}
      >
        <h1 className="fw-bold display-4 mb-3">
          Welcome to <span style={{ color: "#00d4ff" }}>BOOK</span>
          <span style={{ color: "#ff8a00" }}>VERSE</span>
        </h1>
        <p
          className="lead mx-auto"
          style={{ maxWidth: "700px", lineHeight: "1.8", fontSize: "1.2rem" }}
        >
          Dive into the universe of stories. Discover books that awaken your
          imagination, meet authors who inspire, and join a community that celebrates
          creativity and knowledge.
        </p>
        <div className="mt-4">
          <a href="#signup" className="btn btn-warning text-dark fw-semibold px-4 py-2 rounded-pill mx-2">
            Join Now
          </a>
          <a href="#about" className="btn btn-outline-info fw-semibold px-4 py-2 rounded-pill mx-2">
            Explore More
          </a>
        </div>
      </section>

      {/* ===================== ABOUT SECTION ===================== */}
      <section
        id="about"
        className="text-center py-5"
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #1f1c2c, #928dab)",
        }}
      >
        <div className="container py-5">
          <h1 className="fw-bold mb-4">
            About <span style={{ color: "#00d4ff" }}>BOOK</span>
            <span style={{ color: "#ff8a00" }}>VERSE</span>
          </h1>
          <p
            className="lead mx-auto mb-4"
            style={{ maxWidth: "800px", lineHeight: "1.8" }}
          >
            BOOKVERSE isn’t just a website — it’s a journey into imagination.
            We believe books are portals, each opening a world waiting to be discovered.
            Whether you’re seeking inspiration, adventure, or peace, BOOKVERSE is where
            stories find their readers.
          </p>
          <p
            className="mx-auto"
            style={{ maxWidth: "800px", lineHeight: "1.8", fontSize: "1.1rem" }}
          >
            Our mission is to make reading feel magical again. Explore curated
            recommendations, review your favorite titles, and let BOOKVERSE help
            you discover the next story your heart needs.
          </p>
        </div>
      </section>

      {/* ===================== CONTACT SECTION ===================== */}
      <section
        id="contact"
        className="text-center py-5"
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #000428, #004e92)",
        }}
      >
        <div className="container py-4">
          <h1 className="fw-bold mb-4">
            Contact <span style={{ color: "#00d4ff" }}>BOOK</span>
            <span style={{ color: "#ff8a00" }}>VERSE</span>
          </h1>
          <p className="lead mx-auto mb-5" style={{ maxWidth: "700px", lineHeight: "1.7" }}>
            Have feedback, ideas, or just want to say hello? We’d love to hear from you.
            Fill out the form below, and let’s connect in this universe of stories.
          </p>

          <form
            className="mx-auto text-start"
            style={{ maxWidth: "600px" }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="mb-3">
              <label className="form-label text-light">Your Name</label>
              <input type="text" className="form-control rounded-pill" placeholder="Enter your name" required />
            </div>
            <div className="mb-3">
              <label className="form-label text-light">Email</label>
              <input type="email" className="form-control rounded-pill" placeholder="Enter your email" required />
            </div>
            <div className="mb-3">
              <label className="form-label text-light">Message</label>
              <textarea
                className="form-control rounded-4"
                rows="4"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-warning text-dark fw-semibold rounded-pill px-4 py-2">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer
        className="text-center text-light py-4"
        style={{
          background: "linear-gradient(90deg, #000428 0%, #004e92 100%)",
        }}
      >
        <p className="mb-0">
          © {new Date().getFullYear()} <span style={{ color: "#00d4ff" }}>BOOK</span>
          <span style={{ color: "#ff8a00" }}>VERSE</span>. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
