import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className=''>
      <img  className="small" src={product.image} alt={product.name} style={{}} />
      <h3>{product.name}</h3>
      <div>${product.price}</div>
      <div>
        <button style={{color:"black", marginBottom:"20px"}} onClick={() => onAdd(product)}>Kosárhoz adás</button>
      </div>
    </div>
  );
}