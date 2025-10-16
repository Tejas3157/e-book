import React from "react";
import BookCard from "./BookCard";

const BookList = ({ books, onAddToCart, onAddToWishlist, onAddToBookmark }) => {
  return (
    <div className="book-list">
      {books.length === 0 && <p>No books found.</p>}
      {books.map(book => (
        <BookCard
          key={book.id}
          book={book}
          onAddToCart={onAddToCart}
          onAddToWishlist={onAddToWishlist}
          onAddToBookmark={onAddToBookmark}
        />
      ))}
    </div>
  );
};

export default BookList;