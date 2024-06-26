import { useState } from "react";
import axios from "axios";
import SaveTheDate from "../components/saveTheDate";
import CardOne from "../cards/confirmationformCards/cardOne";
import CardTwo from "../cards/confirmationformCards/cardTwo";
import CardTwoT from "../cards/confirmationformCards/cardTwoT";
import CardTwoM from "../cards/confirmationformCards/cardTwoM";
import CardThree from "../cards/confirmationformCards/cardThree";
import { postGuest } from "../redux/actions";
import { useDispatch } from "react-redux";

const AttConfFormToDB = ({closeForm}) => {

    const dispatch = useDispatch();

    const [currentCard, setCurrentCard] = useState(1);
    const nextCard = () =>{
        setCurrentCard(currentCard+1);
    };
    const prevCard = () =>{
        setCurrentCard(currentCard-1);
    };

    const [form, setForm] = useState({
        nombre: "",
        apellido: "",
        telefono: "",
        email: "1",
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
            email: "1",
            cantidad: "",
        });
    };

    const postGuestUrl = import.meta.env.VITE_GUESTS_LIST || "http://localhost:3001/guestsDB";

    const submitHandler = (event) => {
        event.preventDefault();
        console.log("datos en form", form);
        if (form.nombre && form.cantidad) {
            // const response = axios.post(postGuestUrl, form)
            dispatch(postGuest(form))
                .then(res => {
                    
                    nextCard();
                    clearForm();
                })
                .catch(err => alert(err))            
        } else {
            setErrors({ ...errors, sbmt: "datos incompletos" });
            clearForm();
            setTimeout(() => {
                setErrors({ ...errors, sbmt: "" });
            }, 2000)
        }
    };



    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative rounded-3xl w-11/12 max-w-2xl bg-white z-10">
            {/* <div className="flex justify-end">
                <button onClick={closeForm} className="bg-musgo text-white px-3 rounded-lg">X</button>
            </div> */}
<div>
        {currentCard===1 && (
            <CardOne form={form} onChangeHandler={changeHandler} onNext={nextCard} onPrev={prevCard} onClose={closeForm} errors={errors}/>
        )}
        {/* {currentCard===2 && (
            <CardTwoT form={form} onChangeHandler={changeHandler} onSubmit={submitHandler} onNext={nextCard} onPrev={prevCard} errors={errors}/>
        )}
        {currentCard===3 && (
            <CardTwoM form={form} onChangeHandler={changeHandler} onSubmit={submitHandler} onNext={nextCard} onPrev={prevCard} errors={errors}/>
        )} */}
         {currentCard===2 && (
            <CardTwo form={form} onChangeHandler={changeHandler} onSubmit={submitHandler} onNext={nextCard} onPrev={prevCard} errors={errors}/>
        )}
        {currentCard===3 && (
            <CardThree onClose={closeForm}/>
        )}
        </div>                 
                </div>
            </div>
        </>
    )
}

export default AttConfFormToDB;










