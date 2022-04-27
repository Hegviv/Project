import React from 'react';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0;
  const shippingPrice = itemsPrice > 10000 ? 0 : 200;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <aside className="">
     
      <h2 id='alap' className='text-center'>Kosár</h2>
      <div className='ures'>
        {cartItems.length === 0 && <div>A kosár üres</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-sm-2">
            <img className="kosarbakep" src={item.image}  />
              </div>
            <div id='termek' className="col-sm-2">
              <h3>{item.name} </h3> 
            
            </div>
        
            <div id='db' className="">
            <h4 style={{backgroundColor:"white"}}>{item.qty} </h4>
            </div>
            <div className=" ">
            <h4>x{item.price.toFixed(2)}  Ft </h4>
            </div>

            <div className="col-sm-1 ">
            <button style={{color:"black",marginLeft:"10px"}} onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button style={{color:"black",marginTop:"20px"}}onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>
            
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">termék összesen:</div>
              <div className="col-1 text-right"> {itemsPrice.toFixed(2)} Ft</div>
            </div>

            <div className="row">
              <div className="col-2">Szállítási díj</div>
              <div className="col-1 text-right">
                {shippingPrice.toFixed(2)} Ft
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>rendelés összesen</strong>
              </div>
              <div className="col-1 text-right">
                <strong>{totalPrice.toFixed(2)}Ft</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button style={{color:"black"}} onClick={() => alert('Rendelés leadva!')}>
                Pénztár
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}