import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import BookList from "./BookList";
import { fetchBooks } from "../../api/api";

const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState("free");
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    if (selectedCategory === "free") {
      fetchBooks(null, true).then(data => {
        setBooks(data);
        setLoading(false);
      });
    } else if (selectedCategory === "topRated") {
      fetchBooks().then(data => {
        setBooks(data.filter(b => b.rating >= 4.5));
        setLoading(false);
      });
    } else {
      fetchBooks(selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)).then(data => {
        setBooks(data);
        setLoading(false);
      });
    }
  }, [selectedCategory]);

  const addToCart = (book) => {
    if (!cart.find(b => b.id === book.id)) setCart([...cart, book]);
  };

  const addToWishlist = (book) => {
    if (!wishlist.find(b => b.id === book.id)) setWishlist([...wishlist, book]);
  };

  const addToBookmark = (book) => {
    if (!bookmarks.find(b => b.id === book.id)) setBookmarks([...bookmarks, book]);
  };

  return (
    <div className="dashboard-container">
      <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <main>
        <TopBar cartCount={cart.length} wishlistCount={wishlist.length} bookmarksCount={bookmarks.length} />
        <div style={{ padding: "1rem" }}>
          <h2>{selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Books</h2>
          {loading ? <p>Loading books...</p> : (
            <BookList books={books} onAddToCart={addToCart} onAddToWishlist={addToWishlist} onAddToBookmark={addToBookmark} />
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;