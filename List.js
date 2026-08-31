import React from "react";
import Card from "./Card";

function List({ items, onAdd }) {
  return (
    <div className="grid">
      {/* .map() */}
      {items.map((item) => (
        <Card key={item.id} item={item} onAdd={onAdd} />
      ))}
    </div>
  );
}

export default List;