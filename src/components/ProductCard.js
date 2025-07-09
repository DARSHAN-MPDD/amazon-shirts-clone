import React from 'react';

const ProductCard = ({ shirt }) => {
    return (
        <div className="product-card">
            <img src={shirt.imageUrl} alt={shirt.name} />
            <h3>{shirt.name}</h3>
            <p>${shirt.price.toFixed(2)}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default ProductCard;