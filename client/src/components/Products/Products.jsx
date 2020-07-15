import React, { useState, useEffect} from 'react';
import axios from 'axios';

import Necklace1 from './images/necklace/necklace.png';
import Necklace2 from './images/necklace/necklace2.png';
import Necklace3 from './images/necklace/necklace3.png';
import Necklace4 from './images/necklace/necklace4.png';

import './Products.css';
import ProductsImages from './images/images';

import Carousel from "./carousel"

const Product = () => {
  const [imagesList, setImagesList] = useState([
    { type: 'colar', picture: Necklace1, id: 'obj1' },
    { type: 'anel', picture: Necklace2, id: 'obj2' },
    { type: 'colar', picture: Necklace3, id: 'obj3' },
    { type: 'pulseira', picture: Necklace4, id: 'obj4' },
  ]);

  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const res = await axios.get('http://localhost:3001/api/products');
    setProducts(res.data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const [filter, setFilter] = useState('');


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
    
  ];

  const handleFilterChange = (clicked) => {
    if (clicked === filter) {
      setFilter('');
    } else {
      setFilter(clicked);
    };
  }

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
          onClick= {() => handleFilterChange('colar')}>
          COLARES
        </button>

        <button 
          className="products-category"
          onClick={() => handleFilterChange('brinco')}>
          BRINCOS
        </button>

        <button 
          className="products-category"
          onClick={() => handleFilterChange('anel')}>
          ANÉIS
        </button>
  
        <button 
          className="products-category"
          onClick={() => handleFilterChange('argola')}> 
          ARGOLAS
        </button>

        <button 
          className="products-category"
          onClick={() => handleFilterChange('pulseira')}>
          PULSEIRAS
        </button>
      </div>

      <div className="products-images-container-mobile">
        <Carousel filter={filter} imagesList={imagesList} />
      </div>

      <div  className="products-images-container-web">
        
        {imagesList.filter((eachItem) => !filter || filter === eachItem.type).map((product) => (
          <ProductsImages key={product.name} product={product} />)
        )}

      </div>

      <button className="products-button">
        VEJA MAIS PRODUTOS
      </button>
    </section>
  );
};

export default Product;