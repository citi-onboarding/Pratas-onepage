import React, { useState, useEffect} from 'react';
import axios from 'axios';

import './Products.css';

const Product = () => {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const res = await axios.get('http://localhost:3001/api/products');
    setProducts(res.data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
};

export default Product;