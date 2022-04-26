import React from 'react'
import Termek from './Termek';

const Kosarhoz = (props) => {
    const {termek, onAdd} = props;
  return (
    <main className='block col-2'>
        <h2>Kínálatunk</h2>
        <div className='row'>
            {termek.map((termek) => (
                <Termek key={termek.id} termek={termek} onAdd={onAdd}></Termek>
            ))}
        </div>
    </main>
  )
}

export default Kosarhoz