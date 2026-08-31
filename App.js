body {
  background-color: #f8f9fa;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.main-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.alert-custom {
  background-color: #e3f2fd;
  border-left: 5px solid #0d6efd;
  color: #084298;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 4px;
}
import React, { useState, useEffect } from "react";
import Header from "./Header";
import List from "./List";
import { productsData } from "./data";
import "./App.css";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [notification, setNotification] = useState("");

  useEffect(() => {
    setProducts(productsData);
  }, []);

  useEffect(() => {
    if (cartCount > 0) {
      setNotification("Item added to cart successfully!");
      const timer = setTimeout(() => setNotification(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [cartCount]);

  const handleAddToCart = (item) => {
    setCartCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="main-container">
      <Header title="Tech Gadgets Store" cartCount={cartCount} />
      
      {notification && (
        <div className="alert-custom d-flex justify-content-between align-items-center">
          <span>{notification}</span>
          <button className="btn-close" onClick={() => setNotification("")}></button>
        </div>
      )}

      <main className="container my-4">
        <h3 className="mb-4 text-secondary">Featured Products</h3>
        <List items={products} onAddToCart={handleAddToCart} />
      </main>
    </div>
  );
}

export default App;