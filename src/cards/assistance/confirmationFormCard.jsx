import { useState } from "react";
import { FaMinusCircle } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import AttConfFormToDBTY from "../../components/attConfFormToDBTY";

const ConfirmationFormCard = ({ form, onChangeHandler, onSubmit, onClose, errors }) => {

    const [currentCard, setCurrentCard] = useState(1);
    const nextCard = () =>{
        setCurrentCard(currentCard+1);
    };

    const [quantity, setQuantity] = useState(0);

    const decreaseQty = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
            onChangeHandler({ target: { name: "cantidad", value: quantity - 1 } });
        }
    };
    const increaseQty = () => {
        if (quantity < 5) {
            setQuantity(quantity + 1);
            onChangeHandler({ target: { name: "cantidad", value: quantity + 1 } })
        }
    }

    const handleSubmit = (e) => {
        nextCard();
        onSubmit();
    }


    return (
        <>
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative border-4 border-color1 rounded-xl w-11/12 max-w-2xl bg-white p-4 z-10">
        {currentCard===1 && (
            <div>
            <div className="">
                <input type="text" value={form.nombre} onChange={onChangeHandler} name="nombre" placeholder="Ingresa tu nombre"/>
                {errors.nombre && <span className="absolute mt-10 text-pink-300">{errors.nombre}</span>}
            </div>

            <div className="">
                <input type="text" value={form.apellido} onChange={onChangeHandler} name="apellido" placeholder="Ingresa tu apellido"/>
                {errors.apellido && <span className="absolute mt-10 text-pink-300">{errors.apellido}</span>}
            </div>

            <div className="">
                <input type="text" value={form.telefono} onChange={onChangeHandler} name="telefono" placeholder="Ingresa tu telefono"/>
                {errors.telefono && <span className="absolute mt-10 text-pink-300">{errors.telefono}</span>}
            </div>

            <div className="">
                <input type="text" value={form.email} onChange={onChangeHandler} name="email" placeholder="Ingresa tu email"/>
                {errors.email && <span className="absolute mt-10 text-pink-300">{errors.email}</span>}
            </div>


            <p >cantidad de personas que confirmas, En caso de haber registrado una familia, ingresá todos los integrantes</p>
            <div className="flex flex-row justify-center pb-10 z-[70] md:pt-3">
                <FaMinusCircle onClick={decreaseQty} className="cursor-pointer text-color1 hover:text-color2 text-4xl mr-4" />
                <span className="mx-2 font-fuente1 text-3xl">{quantity}</span>
                <FaCirclePlus onClick={increaseQty} className="cursor-pointer text-color1 hover:text-color2 text-4xl ml-4" />
            </div>


            {quantity === 0 ?
                <div className="flex justify-center md:justify-end md:pr-10">
                    <button onClick={handleSubmit} className="font-julius text-sm border border-white text-white rounded-3xl py-2 w-5/6 md:w-1/3 ">Finalizar y enviar</button>
                </div>
                :
                <div className="flex justify-center md:justify-end md:pr-10">
                    <button onClick={handleSubmit} className="font-julius text-sm border rounded-3xl py-2 w-5/6 md:w-1/3 bg-white hover:bg-grisi">{errors.sbmt ? errors.sbmt : "finalizar y enviar"}</button>

                </div>
            }
            {/* <button onClick={onNext} className="font-fuente1 text-sm border rounded-3xl py-2 w-5/6 md:w-1/3 bg-white hover:bg-color1">siguiente</button> */}
            <button onClick={onClose} className="font-fuente1 text-sm underline text-gray-500 hover:text-black">Cerrar</button>
            </div>
            )}
            {currentCard ===2 && (
                <div>                
                <AttConfFormToDBTY onClose={onClose} />
                </div>
            )}
            </div>
            </div>
        </>
    )
}

export default ConfirmationFormCard;