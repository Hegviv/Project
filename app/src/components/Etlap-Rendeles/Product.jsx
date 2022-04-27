import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div >
      <div className='container'>
        <div style={{marginRight:"20%"}} className='col-sm-3'>
      <img className="kep" src={product.image} alt={product.name}  />
      </div>
      <div style={{marginRight:"20px"}} className='col-sm-3'>
      <h3>{product.name}</h3>
      </div>
      <div style={{marginRight:"20px"}} className='col-sm-3'>

      {product.price}  Ft
      </div>
      <div style={{marginRight:"20px"}} className='col-sm-3'>
        <button className='kosar' style={{color:"black", marginBottom:"20px"}} onClick={() => onAdd(product)}></button>
      </div>
      </div>
    </div>
  );
}