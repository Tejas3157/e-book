import React from "react";

const categories = [
  { id: "free", label: "Free Books" },
  { id: "topRated", label: "Top Rated" },
  { id: "business", label: "Business" },
  { id: "education", label: "Education" },
  { id: "financial", label: "Financial" },
];

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <aside className="sidebar">
      <h2>E-Books</h2>
      <nav>
        <ul>
          {categories.map(cat => (
            <li
              key={cat.id}
              className={selectedCategory === cat.id ? "active" : ""}
              onClick={() => setSelectedCategory(cat.id)}
              style={{ cursor: "pointer", padding: "10px 0" }}
            >
              {cat.label}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;