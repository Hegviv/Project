import React from 'react';
import Product from './Product';

export default function Main(props) {
  const { products, onAdd } = props;
  return (
    
    <div id="alaphatter" className="container">
        <h3 id="alap" className="text-center">Étlap</h3>
    <main className="block col-2">
     
      <div className="row">
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
    </div>
  );
}