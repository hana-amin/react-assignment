import App from "./App";
import React, { useState } from "react";
import Header from "./comp/Header";
import List from "./comp/List";
import { products } from "./data";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const handleAdd = (item) => setCart([...cart, item]);

  return (
    <div className="app">
      <Header title="Store" cartCount={cart.length} />
      <List items={products} onAdd={handleAdd} />
    </div>
  );
}

export default App;
