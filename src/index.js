import React, { useState } from "react";
import ReactDOM from "react-dom";

const shirtNames = [
  "Classic White Shirt",
  "Blue Denim Shirt",
  "Checked Casual Shirt",
  "Black Formal Shirt",
  "Red Flannel Shirt",
  "Green Polo Shirt",
  "Grey Linen Shirt",
  "Yellow Casual Shirt",
  "Navy Blue Shirt",
  "Purple Slim Fit Shirt",
  "Orange Summer Shirt",
  "Pink Party Shirt",
  "Brown Corduroy Shirt",
  "Olive Green Shirt",
  "Sky Blue Shirt",
  "White Linen Shirt",
  "Black Polo Shirt",
  "Grey Slim Fit Shirt",
  "Red Checked Shirt",
  "Blue Striped Shirt",
  "Classic Black Shirt",
  "Light Blue Shirt",
  "Green Checked Shirt",
  "Formal White Shirt",
  "Casual Red Shirt",
  "Yellow Polo Shirt",
  "Grey Formal Shirt",
  "Blue Casual Shirt",
  "Navy Checked Shirt",
  "Purple Polo Shirt",
  "Orange Checked Shirt",
  "Pink Slim Fit Shirt",
  "Brown Formal Shirt",
  "Olive Polo Shirt",
  "Sky Checked Shirt",
  "White Polo Shirt",
  "Black Checked Shirt",
  "Grey Polo Shirt",
  "Red Slim Fit Shirt",
  "Blue Linen Shirt",
  "Classic Navy Shirt",
  "Light Checked Shirt",
  "Green Slim Fit Shirt",
  "Formal Black Shirt",
  "Casual Blue Shirt",
  "Yellow Slim Fit Shirt",
  "Grey Checked Shirt",
  "Blue Party Shirt",
  "Navy Slim Fit Shirt",
  "Purple Checked Shirt",
];

const shirtImages = [
  "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80", // Classic White Shirt
  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80", // Blue Denim Shirt
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80", // Checked Casual Shirt
  "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b?auto=format&fit=crop&w=400&q=80", // Black Formal Shirt
  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80", // Red Flannel Shirt
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", // Green Polo Shirt
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", // Grey Linen Shirt
  "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80", // Yellow Casual Shirt
  "https://images.unsplash.com/photo-1526178613658-3f1622045557?auto=format&fit=crop&w=400&q=80", // Navy Blue Shirt
  "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80", // Purple Slim Fit Shirt
  // ...add more if you want...
];

// For the rest, generate unique Unsplash images using the shirt name and index
const shirts = shirtNames.map((name, idx) => ({
  id: idx + 1,
  name,
  price: 499 + (idx % 7) * 50 + (idx % 3) * 100,
  image:
    shirtImages[idx] ||
    `https://source.unsplash.com/400x180/?shirt,${encodeURIComponent(name)},${idx}`,
}));

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
                transition:
                  "transform 0.2s, box-shadow 0.2s",
                cursor: "pointer",
                border: "1px solid #e3e3e3",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minHeight: 350,
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-8px) scale(1.03)";
                e.currentTarget.style.boxShadow =
                  "0 8px 32px rgba(35,47,62,0.15)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow =
                  "0 4px 16px rgba(0,0,0,0.08)";
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