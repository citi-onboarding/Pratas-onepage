import React, { useState, useEffect} from 'react';
import axios from 'axios';

import './Products.css';
import ProductsImages from './images/images';

import Carousel from "./carousel";

const Product = () => {
  const [imagesList, setImagesList] = useState([]);

  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const res = await axios.get('http://localhost:3001/api/products');
    setProducts(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const [filter, setFilter] = useState('colar');


  const handleFilterChange = (clicked) => {
    if (clicked === filter) {
      setFilter('');
    } else {
      setFilter(clicked);
    };
  }

  const changeStyle = (type) => {
    if (filter === type ){
    return({ backgroundColor:'black' })};
  }

  return (
    <section className="products">
      <div className="title-container-products">
        <h1 className="title-products">NOSSOS PRODUTOS</h1>
        <div className="background-products">
          <h2 className="subtitle-products">TRABALHAMOS SOMENTE COM JOIAS EM PRATA</h2>
        </div>
      </div>

     <div className="category-container">
        <button 
          className="products-category"
          onClick= {() => handleFilterChange('colar')}>
          COLARES
          <div className="selected-filter-line" style={changeStyle('colar')}></div>
        </button>

        <button 
          className="products-category"
          onClick={() => handleFilterChange('brinco')}>
          BRINCOS
          <div className="selected-filter-line" style={changeStyle('brinco')}></div>
        </button>

        <button 
          className="products-category"
          onClick={() => handleFilterChange('anel')}>
          ANÉIS
          <div className="selected-filter-line" style={changeStyle('anel')}></div>
        </button>
  
        <button 
          className="products-category"
          onClick={() => handleFilterChange('argola')}> 
          ARGOLAS
          <div className="selected-filter-line" style={changeStyle('argola')} ></div>
        </button>

        <button 
          className="products-category"
          onClick={() => handleFilterChange('pulseira')}>
          PULSEIRAS
          <div className="selected-filter-line" style={changeStyle('pulseira')}></div>
        </button>
      </div>

      <div className="products-images-container-mobile">
        <Carousel filter={filter} imagesList={imagesList} />
      </div>

      <div  className="products-images-container-web">
        
        {products.filter((eachItem) => !filter || filter === eachItem.type).slice(0,4).map((product) => (
          <ProductsImages key={product._id} product={product} />)
        )}

      </div>

      <button className="products-button">
        VEJA MAIS PRODUTOS
      </button>
    </section>
  );
};

export default Product;