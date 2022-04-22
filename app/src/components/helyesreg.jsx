export default function helyesreg(values) {
    let errors = {}

    if(!values.felhasznalo.trim()) {
        errors.felhasznalo = "Kérem adjon felhasználó nevet!"
    }
    if(!values.email) {
        errors.felhasznalo = "Kérem adjon email címet!"
    }
    if(!values.jelszo) {
        errors.felhasznalo = "Kérem adjon érvényes jelszót!"
    } else if (values.jelszo.length < 8) {
        errors.jelszo = "A jelszónak legalább 8 karakterből kell állnia";
    }
    if(!values.jelszo2) {
        errors.felhasznalo = "Kérem erősítse meg a jelszavát!!"
    } else if (values.jelszo2 !== values.jelszo) {
        errors.jelszo2 = "Az adott jelszavak nem egyeznek!";
    }
    return errors;
}