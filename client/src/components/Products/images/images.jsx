import React from 'react';

const ProductsImages = (props) => {

  return(

    <div>
      <img className="products-images"
      src={props.product.picture}
      alt={props.product.name}/>
    </div>

  );
}

export default ProductsImages;