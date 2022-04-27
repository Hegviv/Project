import React from 'react'
import FormUse from './FormUse'
import helyesreg from './helyesreg'

const Regiszt = (Submitform) => {

    const {handleChange, values, handleSubmit, errors} = FormUse(Submitform, helyesreg)

  return (
    <div id="regiszt" className="container">
       <form className="form">
           <hr></hr>
           <h3 id="regisztrácio_felir" className="text-center">Regisztráció</h3>
           <div className='form-inputs'>
                <label htmlFor="felhasznalo" className='form-label'>
                    Felhasználónév:
                </label>
                <input type="text"
                name="felhasznalo" 
                className='form-input' 
                placeholder='Adja meg a felhasználónevét!'
                value={values.felhasznalo}
                onChange={handleChange}
                />
                {errors.felhasznalo && <p>{errors.felhasznalo}</p>}
           </div>

           <div className='form-inputs'>
                <label htmlFor="email" className='form-label'>
                    Email-cím:
                </label>
                <input type="email" 
                name="email" 
                className='form-input' 
                placeholder='Adja meg az email-címét!'
                value={values.email}
                onChange={handleChange}
                />
                {errors.email && <p>{errors.email}</p>}
           </div>

           <div className='form-inputs'>
                <label htmlFor="jelszo" className='form-label'>
                    Jelszó:
                </label>
                <input type="jelszo" 
                name="jelszo" 
                className='form-input' 
                placeholder='Adja meg a jelszavát!'
                value={values.jelszo}
                onChange={handleChange}
                />
                {errors.jelszo && <p>{errors.jelszo}</p>}
           </div>

           <div className='form-inputs'>
                <label htmlFor="jelszo2" className='form-label'>
                    Jelszó megerősítése:
                </label>
                <input type="jelszo" 
                name="jelszo2" 
                className='form-input' 
                placeholder='Erősitse meg a jelszavát!'
                value={values.jelszo2}
                onChange={handleChange}
                />
                {errors.jelszo2 && <p>{errors.jelszo2}</p>}
           </div>
           <div id='jelentkez'>
           <button id='regisztgomb' className='form-input-btn' type="submit">
            Regisztráció 
           </button>
           <span className='form-input-login' style={{color:" rgb(140, 140, 140)"}}>
               Már regisztráltál? Akkor <a href="#"> jelentkezz be!</a>
           </span>
           <hr></hr>

           </div>
       </form>
   </div>
  )
}

export default Regiszt