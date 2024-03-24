import { Link, useParams } from "react-router-dom";
import { modifyGuest } from "./../../redux/actions"
import { useState } from "react";
import { FaMinusCircle } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/footer";




const GuestModify = () => {

    const dispatch = useDispatch();
    const { id } = useParams();

    const guests = useSelector(state => state.guests);

    const selectedGuest = Object.values(guests).find(guest => guest.id === id);
    console.log("selectedGuest", selectedGuest);

    const [quantity, setQuantity] = useState(selectedGuest.cantidad);

    const decreaseQty = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
            changeHandler({ target: { name: "cantidad", value: quantity - 1 } });
        }
    };
    const increaseQty = () => {
        if (quantity < 5) {
            setQuantity(quantity + 1);
            changeHandler({ target: { name: "cantidad", value: quantity + 1 } })
        }
    }

    const [form, setForm] = useState({
        id: selectedGuest.id,
        nombre: selectedGuest.nombre,
        apellido: selectedGuest.apellido,
        telefono: selectedGuest.telefono,
        email: selectedGuest.email,
        cantidad: selectedGuest.cantidad,
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
        console.log("property", property, "value", value);

        setForm({ ...form, [property]: value });
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log("datos en form", form);
        if (form.nombre && form.cantidad) {
            dispatch(modifyGuest(form))
                .then(() => {
                    alert("las modificaciones han sido aplicadas con exito")
                })
                .catch(err => {
                    alert("ocurrio un error" + err.message)
                })
        } else {
            setErrors({ ...errors, sbmt: "datos incompletos" });

            setTimeout(() => {
                setErrors({ ...errors, sbmt: "" });
            }, 2000)
        }
    };


    return (
        <>

            <div className="relative">
                
            </div>

            <div className="pt-4 pr-16">
                
                <div className="flex justify-end">
                    <Link to="/admin" className="border-2 border-color1 px-4 rounded-xl text-color1">volver</Link>
                </div>
            </div>

            <div className="text-center pt-20">
                <h1 className="font-fuente6 text-color1 text-base uppercase">Modificar datos de invitado:</h1>
            </div>

            <div className="pt-10 w-3/4 mx-auto"> {/*  formulario */}

                <div className="flex justify-center">
                    <input
                        type="text"
                        value={form.nombre}
                        onChange={changeHandler}
                        name="nombre"
                        placeholder="Nombre"
                        className="bg-neutral-200 rounded-md text-2xl pl-4 300 hover:border-stone-300 focus:outline-none focus:border-zinc-300 focus:ring focus:ring-zinc-300 mb-2 " />
                </div>

                <div className="flex justify-center">
                    <input type="text" value={form.apellido} onChange={changeHandler} name="apellido" placeholder="Apellido"
                        className="bg-neutral-200 rounded-md text-2xl pl-4 border border-stone-300 hover:border-stone-300 focus:outline-none focus:border-zinc-300 focus:ring focus:ring-zinc-300 mb-2 " />

                </div>

                <div className="flex justify-center">
                    <input type="text" value={form.telefono} onChange={changeHandler} name="telefono" placeholder="Telefono"
                        className="bg-neutral-200 rounded-md text-2xl pl-4 border border-stone-300 hover:border-stone-300 focus:outline-none focus:border-zinc-300 focus:ring focus:ring-zinc-300 mb-2 " />

                </div>

                <div className="flex justify-center">
                    <input type="text" value={form.email} onChange={changeHandler} name="email" placeholder="E-mail"
                        className="bg-neutral-200 rounded-md text-2xl pl-4 border border-stone-300 hover:border-stone-300 focus:outline-none focus:border-zinc-300 focus:ring focus:ring-zinc-300 mb-2 " />

                </div>

                <div className="flex flex-row items-center pb-6 px-4">
                    <p className="text-color1">Cantidad de personas que confirma:</p>
                    <div className="flex flex-row justify-center z-[70] pr-6">
                        <FaMinusCircle onClick={decreaseQty} className="cursor-pointer text-color1 hover:text-color2 text-4xl mr-2" />
                        <span className="mx-2 font-fuente1 text-3xl">{quantity}</span>
                        <FaCirclePlus onClick={increaseQty} className="cursor-pointer text-color1 hover:text-color2 text-4xl ml-2" />
                    </div>
                </div>


                {quantity === 0 ?
                    <div className="flex justify-center md:justify-end md:pr-10 pb-6">
                        <button onClick={submitHandler} className="border-2 border-color1 rounded-2xl p-2 w-[150px]">Finalizar y enviar</button>
                    </div>
                    :
                    <div className="flex justify-center md:justify-end md:pr-10 pb-24">
                        <button onClick={submitHandler} className="border-2 border-color1 rounded-2xl p-2 w-[150px]">{errors.sbmt ? errors.sbmt : "finalizar y enviar"}</button>
                    </div>
                }

            </div>
            
        </>
    )
}

export default GuestModify;