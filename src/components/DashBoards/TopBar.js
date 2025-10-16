import React from "react";

const TopBar = ({ cartCount, wishlistCount, bookmarksCount }) => {
  return (
    <div className="topbar">
      <div className="topbar-icons">
        <div className="icon-with-badge">
          🛒
          {cartCount > 0 && <span className="badge">{cartCount}</span>}
        </div>
        <div className="icon-with-badge">
          ❤️
          {wishlistCount > 0 && <span className="badge">{wishlistCount}</span>}
        </div>
        <div className="icon-with-badge">
          📑
          {bookmarksCount > 0 && <span className="badge">{bookmarksCount}</span>}
        </div>
      </div>
    </div>
  );
};

export default TopBar;