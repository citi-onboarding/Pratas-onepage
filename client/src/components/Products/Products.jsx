import React, { useState, useEffect} from 'react';
import axios from 'axios';

import Necklace1 from './images/necklace/necklace.png';
import Necklace2 from './images/necklace/necklace2.png';
import Necklace3 from './images/necklace/necklace3.png';
import Necklace4 from './images/necklace/necklace4.png';

<<<<<<< HEAD
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

import Necklace1 from './images/necklace/necklace.png';
import Necklace2 from './images/necklace/necklace2.png';
import Necklace3 from './images/necklace/necklace3.png';
import Necklace4 from './images/necklace/necklace4.png';

=======
>>>>>>> 9d28968... created the carousel and the filter
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

  const [filter, setFilter] = useState('colar');


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
        
        {imagesList.filter((eachItem) => !filter || filter === eachItem.type).slice(0,4).map((product) => (
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