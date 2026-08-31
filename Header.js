import React from "react";

function Header({ title, cartCount }) {
  return (
    <header className="header">
      <h1>{title}</h1>
      {/* && Operator */}
      {cartCount > 0 && <span className="cart-badge">Cart: {cartCount}</span>}
    </header>
  );
}

export default Header;