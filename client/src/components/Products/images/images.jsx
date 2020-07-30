import React from 'react';

const ProductsImages = (props) => {
  return(

    <div>
      <img className="products-images"
      src={props.product.imagem[0].url}
      alt={props.product.nome}/>
    </div>

  );
}

export default ProductsImages;