import React from 'react'


export default function Termek(props) {
    const {termek, onAdd} = props;
  return (
    <div>
        <img className='small' src={termek.kep}  alt={termek.nev}/>
        <h3>{termek.nev}</h3>
        <div>${termek.ar}</div>
        <div>
            <button  onclick={()=>onAdd(termek)}>Hozzáadás a kosárhoz</button>
        </div>
    </div>
  )
}
