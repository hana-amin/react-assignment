import React from "react";

const Header = ({ title, cartCount }) => {
  const headerStyle = {
    backgroundColor: "#212529",
    color: "#ffffff",
    padding: "20px",
    borderRadius: "0 0 10px 10px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
  };

  return (
    <header style={headerStyle} className="d-flex justify-content-between align-items-center mb-4">
      <h2 className="m-0">{title}</h2>
      <div className="badge bg-warning text-dark fs-6">
        🛒 Cart Items: <span>{cartCount}</span>
      </div>
    </header>
  );
};

export default Header;
