import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import shirtsData from '../data/shirts.json';

const ProductList = () => {
    const [shirts, setShirts] = useState([]);

    useEffect(() => {
        // Simulating fetching data from a JSON file
        setShirts(shirtsData);
    }, []);

    return (
        <div className="product-list">
            {shirts.map(shirt => (
                <ProductCard key={shirt.id} shirt={shirt} />
            ))}
        </div>
    );
};

export default ProductList;