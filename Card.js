import React from "react";

function Card({ item, onAdd }) {
  return (
    <div className={`card ${!item.inStock ? "out" : ""}`}>
      <h3>{item.name}</h3>
      <p>${item.price}</p>
      
      {/* Ternary Operator */}
      <span className="status">
        {item.inStock ? "In Stock" : "Out of Stock"}
      </span>

      {/* && Operator */}
      {item.discount > 0 && <div className="tag">Save ${item.discount}</div>}

      {/* Ternary Operator */}
      {item.inStock ? (
        <button onClick={() => onAdd(item)}>Add</button>
      ) : (
        <button disabled>N/A</button>
      )}
    </div>
  );
}

export default Card;