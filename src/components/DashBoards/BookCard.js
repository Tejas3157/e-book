import React from "react";

const BookCard = ({ book, onAddToCart, onAddToWishlist, onAddToBookmark }) => {
  return (
    <div className="book-card">
      <div className="book-cover" style={{ backgroundColor: "#ddd", height: "180px", borderRadius: "8px", marginBottom: "8px" }}>
        {/* Replace with actual image */}
        <p style={{ textAlign: "center", paddingTop: "70px" }}>Book Cover</p>
      </div>
      <h3>{book.title}</h3>
      <p><i>{book.author}</i></p>
      <p>Rating: {book.rating} ★</p>
      <div className="book-actions">
        <button onClick={() => onAddToCart(book)}>Add to Cart</button>
        <button onClick={() => onAddToWishlist(book)}>Wishlist</button>
        <button onClick={() => onAddToBookmark(book)}>Bookmark</button>
      </div>
    </div>
  );
};

export default BookCard;