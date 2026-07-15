import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";
import { Link } from "react-router-dom";

const plants = [
  // Indoor Plants
  {
    id: 1,
    name: "Snake Plant",
    price: 15,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32a8b77?w=400"
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 18,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1463154545680-d59320fd685d?w=400"
  },
  {
    id: 3,
    name: "Spider Plant",
    price: 12,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400"
  },
  {
    id: 4,
    name: "ZZ Plant",
    price: 20,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1483794344563-d27a8d18014e?w=400"
  },
  {
    id: 5,
    name: "Pothos",
    price: 14,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=400"
  },
  {
    id: 6,
    name: "Rubber Plant",
    price: 22,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400"
  },

  // Succulents
  {
    id: 7,
    name: "Aloe Vera",
    price: 10,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1459156212016-c812468e2115?w=400"
  },
  {
    id: 8,
    name: "Jade Plant",
    price: 13,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1463154545680-d59320fd685d?w=400"
  },
  {
    id: 9,
    name: "Echeveria",
    price: 11,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400"
  },
  {
    id: 10,
    name: "Haworthia",
    price: 9,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400"
  },
  {
    id: 11,
    name: "Sedum",
    price: 8,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=400"
  },
  {
    id: 12,
    name: "Kalanchoe",
    price: 12,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1446071103084-c257b5f70672?w=400"
  },

  // Air Purifying Plants
  {
    id: 13,
    name: "Areca Palm",
    price: 25,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=400"
  },
  {
    id: 14,
    name: "Boston Fern",
    price: 19,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400"
  },
  {
    id: 15,
    name: "Bamboo Palm",
    price: 24,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400"
  },
  {
    id: 16,
    name: "Chinese Evergreen",
    price: 21,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1483794344563-d27a8d18014e?w=400"
  },
  {
    id: 17,
    name: "Dracaena",
    price: 23,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1459156212016-c812468e2115?w=400"
  },
  {
    id: 18,
    name: "English Ivy",
    price: 16,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400"
  }
];

const categories = ["Indoor Plants", "Succulents", "Air Purifying Plants"];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const isAddedToCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-list-page" style={{ padding: "20px" }}>
      {/* Navbar */}
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
          <Link className="nav-link" to="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </Link>
          <Link className="nav-link" to="/plants" style={{ color: "white", textDecoration: "none" }}>
            Plants
          </Link>
          <Link className="nav-link cart-link" to="/cart" style={{ color: "white", textDecoration: "none" }}>
            Cart ({totalQuantity})
          </Link>
        </div>
      </nav>

      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Our Plants</h1>

      {categories.map((category) => (
        <div key={category} style={{ marginBottom: "40px" }}>
          <h2 style={{ marginBottom: "20px", color: "#2e7d32" }}>{category}</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "20px"
            }}
          >
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => {
                const added = isAddedToCart(plant.id);

                return (
                  <div
                    key={plant.id}
                    className="plant-card"
                    style={{
                      border: "1px solid #ddd",
                      borderRadius: "10px",
                      padding: "15px",
                      textAlign: "center",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                      backgroundColor: "#fff"
                    }}
                  >
                    <img
                      className="plant-image"
                      src={plant.image}
                      alt={plant.name}
                      style={{
                        width: "100%",
                        height: "180px",
                        objectFit: "cover",
                        borderRadius: "8px"
                      }}
                    />
                    <h3 className="plant-name" style={{ marginTop: "12px" }}>{plant.name}</h3>
                    <p className="plant-price" style={{ fontWeight: "bold", color: "#444" }}>${plant.price}</p>

                    <button
                      className="add-to-cart-btn"
                      onClick={() => handleAddToCart(plant)}
                      disabled={added}
                      style={{
                        marginTop: "10px",
                        padding: "10px 16px",
                        border: "none",
                        borderRadius: "6px",
                        cursor: added ? "not-allowed" : "pointer",
                        backgroundColor: added ? "#9e9e9e" : "#2e7d32",
                        color: "white"
                      }}
                    >
                      {added ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
