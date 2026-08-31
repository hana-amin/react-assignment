import React from "react";
import styled from "styled-components";
import styles from "./Card.module.css";

const StyledButton = styled.button`
  background-color: ${props => (props.isAvailable ? "#0d6efd" : "#6c757d")};
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: ${props => (props.isAvailable ? "pointer" : "not-allowed")};
  font-weight: 600;
  width: 100%;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => (props.isAvailable ? "#0b5ed7" : "#6c757d")};
  }
`;

const Card = ({ item, onAddToCart }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className={`card h-100 p-3 ${styles.cardBox}`}>
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 className="card-title text-dark">{item.name}</h5>
            <p className="card-text text-muted">{item.description}</p>
          </div>
          
          <div className="mt-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span className={styles.priceTag}>${item.price}</span>
              {item.isAvailable ? (
                <span className="badge bg-success">In Stock</span>
              ) : (
                <span className="badge bg-danger">Out of Stock</span>
              )}
            </div>

            <StyledButton 
              isAvailable={item.isAvailable} 
              disabled={!item.isAvailable}
              onClick={() => onAddToCart(item)}
            >
              {item.isAvailable ? "Add to Cart" : "Unavailable"}
            </StyledButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;