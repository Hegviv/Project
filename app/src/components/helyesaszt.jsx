import FormAsztal from "./FormAsztal"
export default function helyesaszt(values) {
    let errors = {}

    if(!values.nap.trim()) {
        errors.nap = "Kérem adjon felhasználó nevet!"
    }
    if(!values.ido) {
        errors.felhasznalo = "Kérem adjon email címet!"
    }
    if(!values.fo) {
        errors.felhasznalo = "Kérem adjon email címet!"
    }
    if(!values.hol) {
        errors.felhasznalo = "Kérem adjon email címet!"
    }    
    if(!values.nev) {
        errors.felhasznalo = "Kérem adjon email címet!"
    }
    if(!values.email) {
        errors.felhasznalo = "Kérem adjon email címet!"
    }  
     if(!values.tel) {
        errors.felhasznalo = "Kérem adjon email címet!"
    }
    if(!values.megjegz) {
        errors.felhasznalo = "Kérem adjon email címet!"
    }
     return errors;
}