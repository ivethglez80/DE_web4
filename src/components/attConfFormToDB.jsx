import { useState } from "react";
import ConfirmationFormCard from "../cards/assistance/confirmationFormCard";
import {postGuest} from "./../redux/actions";
import { useDispatch } from "react-redux";



const AttConfFormToDB= ({closeForm}) => {

    const dispatch = useDispatch();    

    const [form, setForm] = useState({
        nombre: "",
        apellido: "",
        telefono: "",
        email: "",
        cantidad: "",
    });

    const [errors, setErrors] = useState({
        nombre: "",
        apellido: "",
        telefono: "",
        email: "",
        cantidad: "",
        sbmt: "",
    })

    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        console.log("property",property, "value",value);
        validate({ ...form, [property]: value });
        setForm({ ...form, [property]: value });
    }

    const validate = (formData) => {
        if (formData.email.trim() === '') {
            setErrors({ ...errors, email: 'ingrese su correo electronico' });
        } else if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
            setErrors({ ...errors, email: '' });
        } else {
            setErrors({ ...errors, email: 'complete: suAlias@suMail.com' })
        }
       
    };

    const clearForm = () => {
        setForm({
            nombre: "",
            apellido: "",
            telefono: "",
            email: "",
            cantidad: "",
        });
    };

    const postGuestUrl = import.meta.env.VITE_GUESTS_LIST || "http://localhost:3001/guestsDB";

    const submitHandler = (event) => {
        event.preventDefault();
        console.log("datos en form", form);
        if (form.nombre && form.cantidad) {            
            dispatch(postGuest(form))
                .then(res => { 
                                                     
                    clearForm();
                })
                .catch(err => alert(err))            
        } else {
            setErrors({ ...errors, sbmt: "datos incompletos" });
            clearForm();            
        }
    };

    return (
        <>
    
        <ConfirmationFormCard form={form} onChangeHandler={changeHandler} onSubmit={submitHandler} onClose={closeForm} errors={errors}/>
    
    
        </>
    )
}

export default AttConfFormToDB;
