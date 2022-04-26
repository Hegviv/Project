import FormAsztal from "./FormAsztal"
export default function helyesaszt(values) {
    let errors = {}

    if(!values.nap.trim()) {
        errors.nap = "Kérem adjon meg a napot!"
    }
    if(!values.ido) {
        errors.nap = "Kérem adja meg az időt!"
    }
    if(!values.fo) {
        errors.nap = "Kérem adja meg hány fő!"
    }
    if(!values.hol) {
        errors.nap = "Kérem Válasszon preferenciát!"
    }    
    if(!values.nev) {
        errors.nap = "Kérem adja meg a nevet!"
    }
    if(!values.email) {
        errors.nap = "Kérem adja meg az email címet!"
    }  
     if(!values.tel) {
        errors.nap = "Kérem adjon meg telefon számot!"
    }
     return errors;
}