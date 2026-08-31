import React from "react";
import Card from "./Card";

const List = ({ items, onAddToCart }) => {
  return (
    <div className="row">
      {items && items.length > 0 ? (
        items.map((product) => (
          <Card key={product.id} item={product} onAddToCart={onAddToCart} />
        ))
      ) : (
        <p className="text-center text-muted">No products available.</p>
      )}
    </div>
  );
};

export default List;