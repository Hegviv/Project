// import React from 'react'

// const Kosar = (props) => {
//   const{kosarElem, onAdd, onRemove} = props;
//   return (
//     <aside className='block col-1'>
//       <h2>Kosár elemei:</h2>
//       <div>
        
//         {kosarElem.length === 0 && <div>A kosár üres</div>}
//       </div>
//       {kosarElem.map((item) =>
//         <div key={item.id} className="row">
//           <div className='col-2'>{item.nev}</div>
//           <div className='col-2'>
//             <button onclick={()=>onAdd(item)} className="add">+</button>
//             <button onclick={()=>onRemove(item)} className="remove">-</button>
//             </div>
//             <div className='col-2 text-right'>
//               {item.qty} x ${item.ar.toFixed(2)}
//             </div>
//         </div>
//       )}
//     </aside>
//   ) 
// }

// export default Kosar