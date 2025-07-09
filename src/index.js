import React, { useState } from "react";
import ReactDOM from "react-dom";

// Function to generate a random Unsplash image URL
const getRandomImage = (keyword) =>
  `https://source.unsplash.com/random/400x180/?shirt,${keyword},clothing&sig=${Math.floor(
    Math.random() * 1000
  )}`;

// Generate 100 shirts with various fields
const categories = ["Casual", "Formal", "Flannel", "Denim", "Striped", "Plain"];
const colors = ["Red", "Blue", "Green", "Black", "White", "Grey"];

const shirts = Array.from({ length: 100 }, (_, i) => {
  const category = categories[i % categories.length];
  const color = colors[i % colors.length];
  return {
    id: i + 1,
    name: `${color} ${category} Shirt`,
    price: 400 + Math.floor(Math.random() * 300),
    image: getRandomImage(color),
    category,
    color,
    inventory: Math.floor(Math.random() * 50) + 1,
    discount: Math.random() > 0.7 ? `${Math.floor(Math.random() * 30) + 10}% off` : null,
  };
});

function App() {
  const [search, setSearch] = useState("");

  const filteredShirts = shirts.filter((shirt) =>
    shirt.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#f6f6f6",
        minHeight: "100vh",
        paddingBottom: "2rem",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          margin: "2rem 0 1rem 0",
          color: "#232f3e",
        }}
      >
        Amazon Shirts Clone
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "2rem",
        }}
      >
        <input
          type="text"
          placeholder="Search shirts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "0.7rem 1.2rem",
            width: 300,
            borderRadius: 24,
            border: "1px solid #ccc",
            fontSize: "1rem",
            outline: "none",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            transition: "border 0.2s",
          }}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "2rem",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {filteredShirts.length === 0 ? (
          <div
            style={{
              gridColumn: "1/-1",
              textAlign: "center",
              color: "#888",
            }}
          >
            No shirts found.
          </div>
        ) : (
          filteredShirts.map((shirt) => (
            <div
              key={shirt.id}
              style={{
                background: "#fff",
                borderRadius: 16,
                boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                padding: "1rem",
                transition: "transform 0.2s, box-shadow 0.2s",
                cursor: "pointer",
                border: "1px solid #e3e3e3",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minHeight: 380,
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-8px) scale(1.03)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(35,47,62,0.15)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.08)";
              }}
            >
              <img
                src={shirt.image}
                alt={shirt.name}
                style={{
                  width: "100%",
                  height: 180,
                  objectFit: "cover",
                  borderRadius: 12,
                  marginBottom: "1rem",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                  background: "#f3f3f3",
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/400x180?text=No+Image";
                }}
              />
              <h2
                style={{
                  fontSize: "1.1rem",
                  margin: "0.5rem 0",
                  color: "#232f3e",
                  textAlign: "center",
                }}
              >
                {shirt.name}
              </h2>
              <p style={{ color: "#555", fontSize: "0.95rem", margin: "0 0 0.5rem 0" }}>
               
              </p>
              <p style={{ fontSize: "0.85rem", color: "#333" }}>Category: {shirt.category}</p>
              <p style={{ fontSize: "0.85rem", color: "#333" }}>Color: {shirt.color}</p>
              <p style={{ fontSize: "0.85rem", color: "#333" }}>In Stock: {shirt.inventory}</p>
              {shirt.discount && (
                <p style={{ color: "#d32f2f", fontWeight: "bold", fontSize: "0.9rem" }}>
                  {shirt.discount}
                </p>
              )}
              <p
                style={{
                  color: "#b12704",
                  fontWeight: "bold",
                  margin: "0.5rem 0",
                }}
              >
                ₹{shirt.price}
              </p>
              <button
                style={{
                  marginTop: "auto",
                  padding: "0.5rem 1.2rem",
                  background: "#ffd814",
                  border: "none",
                  borderRadius: 20,
                  fontWeight: "bold",
                  color: "#232f3e",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                  transition: "background 0.2s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.background = "#f7ca00")}
                onMouseOut={(e) => (e.currentTarget.style.background = "#ffd814")}
              >
                Add to Cart
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
