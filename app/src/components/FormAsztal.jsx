import { useState, useEffect } from 'react'
import helyesaszt from './helyesaszt';

const FormAsztal = (callback, helyesaszt) => {
    const [values, setValues] = useState({
        nap: '',
        ido: '',
        fo: '',
        hol: '',
        nev: '',
        email: '',
        tel: '',
        megjegz: ''

    })
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = e => {
        setErrors(helyesaszt(values));
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
        // [errors]
    })

    return {handleChange, values, handleSubmit, errors}
};
export default FormAsztal;