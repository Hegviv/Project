import { useState, useEffect } from 'react'

const FormUse = (callback, helyesreg) => {
    const [values, setValues] = useState({
        felhasznalo: '',
        email: '',
        jelszo: '',
        jelszo2: ''
    })
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = e => {
        setErrors(helyesreg(values));
        setIsSubmitting(true)
    }

    const handleChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
         })
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting) {
            callback()
        }
        [errors]
    })

    return {handleChange, values, handleSubmit, errors}
};
export default FormUse;