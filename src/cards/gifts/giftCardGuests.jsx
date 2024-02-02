import { useDispatch } from "react-redux";
import { putDisponible } from "../../redux/actions";

import giftBase from "./../../img/giftBase.png"
import { useState, useEffect } from "react";

const GiftCard = ({ id, imagen, nombre_art, descripcion, link, disponible }) => {

    const dispatch = useDispatch();
    const [invitado, setInvitado] = useState("");
    const [showConfirma, setShowConfirma] = useState(false);
    const [isConfirmed, setIsConfirmed] = useState(false);

    const toggleDisponible = () => {
        dispatch(putDisponible(id, disponible, invitado))
        setIsConfirmed(true)
        setInvitado("")
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
            <div className="border-2 border-red-100">
                <img src={imagen !== "" ? imagen : giftBase} alt={nombre_art} className="w-[140px]" />
                <h3>{nombre_art || ""}</h3>
                <p>{descripcion || ""}</p>
                <a href={link || ""} target="_blank">
                    {link ? "Se puede conseguir aqui"
                        : ""}
                </a>
                <button onClick={toggleConfirma}>Quiero regalar este articulo</button>
            </div>
            {showConfirma && (
                <div>
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                        <div className="relative border-0 border-color1 rounded-xl w-11/12 max-w-2xl bg-zinc-100 p-1 z-10">
                            <p>Al confirmar que usted regala este artículo, será eliminado de la lista para que no sea duplicado por otros invitados.</p>
                            <p>De manera opcional, ingrese su nombre o grupo familiar:</p>
                            <input type="text" value={invitado} onChange={handleInvitadoChange} placeholder="Nombre" />
                            <button onClick={toggleDisponible}>Confirmo mi regalo</button>
                            {isConfirmed && (
                                <div >Gracias !! ❤️❤️</div>
                            )}
                            <div>
                                <button onClick={closeConfirma} className="bg-red-300">cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default GiftCard;