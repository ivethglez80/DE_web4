import { useDispatch } from "react-redux";
import { putDisponible } from "../../redux/actions";

import giftBase from "./../../img/giftBase.png"
import { useState, useEffect } from "react";

const GiftCard = ({ id, imagen, nombre_art, descripcion, link, disponible }) => {

    const [currentCard, setCurrentCard] = useState(1);
    const nextCard = () => {
        setCurrentCard(currentCard + 1);
    };

    const dispatch = useDispatch();
    const [invitado, setInvitado] = useState("");
    const [showConfirma, setShowConfirma] = useState(false);
    const [isConfirmed, setIsConfirmed] = useState(false);

    const toggleDisponible = () => {
        dispatch(putDisponible(id, disponible, invitado))
        setInvitado("")
        nextCard();
        setIsConfirmed(true)
    }

    useEffect(() => {
        let timer;
        if (isConfirmed) {
            timer = setTimeout(() => {
                setShowConfirma(false);
                setIsConfirmed(false);
            }, 3000);
        }
        return () => clearTimeout(timer);
    }, [isConfirmed]);

    const toggleConfirma = (e) => {
        e.stopPropagation();
        setShowConfirma(!showConfirma);
    }

    const closeConfirma = () => {
        setShowConfirma(false);
        setIsConfirmed(false);
    }

    const handleInvitadoChange = (e) => {
        setInvitado(e.target.value);
    };


    return (
        <>
            <div className="my-4 border-2 border-color2 p-2 rounded-2xl">

                <div className=" flex flex-col">

                    <div className="">
                        <div className="flex justify-center">
                            <img src={imagen !== "" ? imagen : giftBase} alt={nombre_art} className="w-[170px] border-4 border-color1" />
                        </div>

                        <div>
                            <h3 className="font-fuente4 text-white text-xl uppercase text-center">{nombre_art || ""}</h3>
                            <p className="font-fuente4 text-white text-base text-center">{descripcion || ""}</p>
                            <div className="flex justify-center pt-4">
                            <a href={link || ""} target="_blank" className="font-fuente5 text-color2 text-xl underline">
                                {link ? "Se puede conseguir aqui"
                                    : ""}
                            </a>
                            </div>
                        </div>
                    </div>

                    <div className="pt-12 pb-6">
                        <p className="font-fuente4 text-white text-sm text-center">Quiero regalar este articulo</p>
                        <div className="flex justify-center pt-2">
                        <button onClick={toggleConfirma} className="bg-color1 border border-color2 hover:bg-[#A2AD7D] rounded-full w-4/6 md:w-2/6 font-fuente4 text-color2 text-base py-1 px-2">click para elegir</button>
                        </div>
                    </div>
                </div>


            </div>
            {showConfirma && (
                <div>
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                        <div className="relative border-0 border-color1 rounded-xl w-11/12 max-w-2xl bg-zinc-100 p-1 z-10">
                            <div className="p-4">
                                <p className="font-fuente5 text-color1 text-xl">Por favor confirme que usted regala este artículo para que sea eliminado de la lista y no se duplique</p>
                                <p className="font-fuente5 text-color1 text-xl pt-4">Opcional: si gusta, ingrese su nombre o grupo familiar:</p>
                                <div className="flex justify-center">
                                <input type="text" value={invitado} onChange={handleInvitadoChange} placeholder="Nombre" className="bg-zinc-200 text-2xl rounded-xl text-center mt-4" />
                                </div>
                                <div className="pt-6 text-center">
                                    <button onClick={toggleDisponible} className="bg-color1 hover:bg-[#A2AD7D] rounded-full py-2 md:w-2/6 font-fuente6 text-white text-base px-4">Confirmo mi regalo</button>
                                </div>
                                {isConfirmed && (
                                    <div className="font-fuente2 text-color1 text-6xl text-center pt-4 ">Gracias !! ❤️❤️</div>
                                )}
                                <div className="flex justify-end pt-12">
                                    <button onClick={closeConfirma} className="underline font-fuente4 text-color1 text-base pr-6 py-4">cerrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default GiftCard;