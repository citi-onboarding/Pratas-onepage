import React, { useState, useEffect} from 'react';
import axios from 'axios';
import ProducsImages from './images/images'
import Necklace1 from './images/necklace/necklace.png';
import Necklace2 from './images/necklace/necklace2.png';
import Necklace3 from './images/necklace/necklace3.png';
import Necklace4 from './images/necklace/necklace4.png';

// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

import './Products.css';
import ProductsImages from './images/images';

const Product = () => {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const res = await axios.get('http://localhost:3001/api/products');
    setProducts(res.data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const productsImages = [
    {
      name: 'colar',
      picture: Necklace1,
    },

    {
      name: 'colar',
      picture: Necklace2,
    },

    {
      name: 'colar',
      picture: Necklace3,
    },

    {
      name: 'colar',
      picture: Necklace4,
    },

    {
      name: 'brinco'
      // picture: classiicação brinco
    },

    {
      name: 'anel'
      // picture: classiicação anel
    },

    {
      name: 'argola'
      // picture: classiicação argola
    },

    {
      name: 'pulseira'
      // picture: classiicação pulseira
    }
    
  ]
    

  return (
    <section>
      <div className="title-container">
        <h1 className="title">NOSSOS PRODUTOS</h1>
        <div className="background">
          <h2 className="subtitle">TRABALHAMOS SOMENTE COM JOIAS EM PRATA</h2>
        </div>
      </div>

      <div className="category-container">
        <button 
          className="products-category"
          onClick="">
          COLARES
        </button>

        <button 
          className="products-category"
          onClick="">
          BRINCOS
        </button>

        <button 
          className="products-category"
          onClick="">
          ANÉIS
        </button>
  
        <button 
          className="products-category"
          onClick=""> 
          ARGOLAS
        </button>

        <button 
          className="products-category"
          onClick="">
          PULSEIRAS
        </button>
      </div>

      <div  className="products-images-container">
        { (productsImages.filter((product) => product.name.toLowerCase() == 'colar')).map((product) => <ProductsImages key={product.name} product={product} />)}
      </div>
      <button className="products-button">
        VEJA MAIS PRODUTOS
      </button>
    </section>
  );
};

export default Product;