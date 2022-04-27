import React from 'react'
import helyesaszt from './helyesaszt'
import FormAsztal from "./FormAsztal"
import FormUse from './FormUse'
const Asztalfoglalas = (Submitform) => {
    const {handleChange, values, handleSubmit, errors} = FormUse(Submitform, helyesaszt)
    return (<>
    <div id="alaphatter" className="container">
                <form action="">
                <hr></hr>
                <h3 id="alap" className="text-center">Asztal adatok</h3>
                    <label for="datum">Kiválasztott nap:</label><br></br>
                    
                    <input type="date" id="datum" name="datum"/> <br></br>

                    <label  for="appt">Kiválasztott időpont:</label> <br></br>
                    <input  type="time" id="appt" name="appt"></input> <br></br>
                    <label for="mennyiség">Hány főre szeretne foglalni?</label> <br></br>
                    <input type="number" id="mennyiség" name="mennyiség" min="1" max="20"></input> <br></br>
                
                    <p>Hol szeretne helyet foglalni?</p>

                    <input className="hely" type="radio" id="terasz" name="hol" value="terasz"/>
                    <label className="hely" for="terasz">Terasz</label><br></br>
                    <input  className="hely" type="radio" id="belter" name="hol" value="belter"/>
                    <label className="hely" for="belter">Beltér</label><br></br>
                    <input className="hely" type="radio" id="nincs" name="hol" value="nincs"/>
                    <label className="hely" for="nincs" >Nincs preferencia</label><br></br>
                <hr></hr>
                <h3 id="alap" className="text-center">Személyes adatok</h3>
                    <label for="Nev">Név:</label><br></br>
                    <input type="text" id="Nev" name="Nev"></input> <br></br>

                    <label for="email">Email cím:</label> <br></br>
                    <input type="email" 
                name="email" 
                className='form-input' 
                placeholder='Adja meg az email-címét!'
                value={values.email}
                onChange={handleChange}></input> 
                   {errors.email && <p>{errors.email}</p>}
                <br></br>

                    <label for="telefon">Telefonszám:</label><br></br>
                    <input type="tel" id="telefon" name="telefon" placeholder="00-00-000-0000" pattern="[0-9]{2}-[0-9]{2}-[0-9]{3}-[0-9]{4}" required></input><br></br>
                    
                    <label for="megj">Megjegyzés:</label><br></br>
                    <input type="text" id="megj" name="megj" placeholder="Esetleges allergia, stb"></input> <br></br>

                    <input type="reset"/>
                    <button  onclick="sendPost()" id="sub" type="submit" value="Submit">Leadás</button>
                <hr></hr>
                   
                </form>
            </div>
    </>
        
    )
}

export default Asztalfoglalas;
