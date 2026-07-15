import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementQuantity, decrementQuantity, removeItem } from "./CartSlice";
import { Link } from "react-router-dom";

function calculateTotalAmount(items) {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = calculateTotalAmount(cartItems);

  const handleCheckout = () => {
    alert("Coming Soon");
  };

  return (
    <div className="cart-page" style={{ padding: "20px" }}>
      <nav
        className="navbar"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 20px",
          backgroundColor: "#2e7d32",
          color: "white",
          borderRadius: "8px",
          marginBottom: "30px"
        }}
      >
        <h2 className="brand-title">Paradise Nursery</h2>
        <div className="nav-links" style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/plants">
            Plants
          </Link>
          <Link className="nav-link cart-link" to="/cart">
            Cart ({totalQuantity})
          </Link>
        </div>
      </nav>

      <h1 className="cart-title" style={{ textAlign: "center", marginBottom: "20px" }}>
        Shopping Cart
      </h1>

      <h2 className="total_cart_amount" style={{ textAlign: "center", color: "#2e7d32", marginBottom: "30px" }}>
        Total Cart Amount: ${totalAmount.toFixed(2)}
      </h2>

      {cartItems.length === 0 ? (
        <div className="empty-cart" style={{ textAlign: "center" }}>
          <p>Your cart is empty.</p>
          <Link to="/plants">
            <button
              className="continue_shopping_btn"
              style={{
                padding: "10px 16px",
                border: "none",
                borderRadius: "6px",
                backgroundColor: "#2e7d32",
                color: "white",
                cursor: "pointer"
              }}
            >
              Continue Shopping
            </button>
          </Link>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="cart-item-card"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "20px",
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "15px",
                marginBottom: "20px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
              }}
            >
              <div className="cart-item-info" style={{ display: "flex", alignItems: "center", gap: "15px", flex: 1 }}>
                <img
                  className="cart-item-image"
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    borderRadius: "8px"
                  }}
                />
                <div>
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-unit-price">Unit Price: ${item.price}</p>
                  <p className="cart-item-quantity">Quantity: {item.quantity}</p>
                  <p className="cart-item-total-price" style={{ fontWeight: "bold" }}>
                    Total Price: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>

              <div className="cart-item-actions" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div className="quantity-controls" style={{ display: "flex", gap: "10px" }}>
                  <button
                    className="quantity_btn increment-btn"
                    onClick={() => dispatch(incrementQuantity(item.id))}
                    style={{
                      padding: "8px 12px",
                      border: "none",
                      borderRadius: "6px",
                      backgroundColor: "#2e7d32",
                      color: "white",
                      cursor: "pointer"
                    }}
                  >
                    +
                  </button>

                  <button
                    className="quantity_btn decrement-btn"
                    onClick={() => dispatch(decrementQuantity(item.id))}
                    style={{
                      padding: "8px 12px",
                      border: "none",
                      borderRadius: "6px",
                      backgroundColor: "#f9a825",
                      color: "white",
                      cursor: "pointer"
                    }}
                  >
                    -
                  </button>
                </div>

                <button
                  className="delete_btn"
                  onClick={() => dispatch(removeItem(item.id))}
                  style={{
                    padding: "8px 12px",
                    border: "none",
                    borderRadius: "6px",
                    backgroundColor: "#c62828",
                    color: "white",
                    cursor: "pointer"
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          <div
            className="cart-footer-actions"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              marginTop: "30px"
            }}
          >
            <Link to="/plants">
              <button
                className="continue_shopping_btn"
                style={{
                  padding: "12px 18px",
                  border: "none",
                  borderRadius: "6px",
                  backgroundColor: "#1565c0",
                  color: "white",
                  cursor: "pointer"
                }}
              >
                Continue Shopping
              </button>
            </Link>

            <button
              className="checkout_btn"
              onClick={handleCheckout}
              style={{
                padding: "12px 18px",
                border: "none",
                borderRadius: "6px",
                backgroundColor: "#2e7d32",
                color: "white",
                cursor: "pointer"
              }}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartItem;
