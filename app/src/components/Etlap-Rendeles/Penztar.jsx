import React from 'react'
import helyesaszt from '../helyesaszt'
import FormAsztal from "../FormAsztal"
import FormUse from '../FormUse'
const Penztar = () => {
    const {handleChange, values, handleSubmit, errors} = FormUse(helyesaszt)
  return (
  <div id="alaphatter" className="container">
  <form action="http://localhost:5000/api/order/feltolt" method='post'>
  <hr></hr>
  <h3 id="alap" className="text-center">Rendelő adatai</h3>

  <label for="Nev">Név:</label><br></br>
  <input type="text" id="Nev" name="vnev"></input> <br></br>

  <label for="email">Email cím:</label> <br></br>
  <input type="email" name="email" className='form-input' placeholder='Adja meg az email-címét!'value={values.email} onChange={handleChange}></input> {errors.email && <p>{errors.email}</p>}<br></br>

  <label for="cim">Kiszálítási cím:</label><br></br>
  <input type="text" id="cim" name="cim" placeholder="Szeged, Gábor Áron utca 12."></input> <br></br>

  <label for="telefon">Telefonszám:</label><br></br>
  <input type="tel" id="telefon" name="tel" placeholder="00-00-000-0000" pattern="[0-9]{2}-[0-9]{2}-[0-9]{3}-[0-9]{4}" required></input><br></br>
      
  <label for="megj">Megjegyzés:</label><br></br>
  <input type="text" id="megj" name="megjegyzes" placeholder="Esetleges allergia, stb"></input> <br></br>

  <input type="reset"/>
  <button id="sub" type="submit" value="Submit">Leadás</button>
  <hr></hr>

  </form>
</div> 
  )

    
  
}

export default Penztar