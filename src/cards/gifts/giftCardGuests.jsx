import { useDispatch } from "react-redux";
import { putDisponible } from "../../redux/actions";

import giftBase from "./../../img/giftBase.png"
import { useState } from "react";

const GiftCard = ({ id, imagen, nombre_art, descripcion, link, disponible }) =>{

    const dispatch = useDispatch();
    const [invitado, setInvitado] = useState("");
    const [showConfirma, setShowConfirma] = useState(false);

    const toggleDisponible = () => {
        dispatch(putDisponible(id,disponible, invitado))
    }


    const toggleConfirma = (e) => {
        e.stopPropagation();
        setShowConfirma(!showConfirma);
    }

    const closeConfirma = () => setShowConfirma(false);

    const handleInvitadoChange = (e) => {
        setInvitado(e.target.value);        
    };


    return(
        <>
        <div className="border-2 border-red-100">
            <img src={imagen!=="" ? imagen : giftBase} alt={nombre_art} className="w-[140px]"/>
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
                    <p>Al confirmar que usted regala este artículo, será eliminado de la lista para que no sea duplicado por otros invitados.</p>
                    <p>De manera opcional, ingrese su nombre o grupo familiar:</p>
                    <input type="text" value={invitado} onChange={handleInvitadoChange} placeholder="Nombre" />
                    <button onClick={toggleDisponible}>Confirmo mi regalo</button>
                </div>
        )}
        </>
    )    
}

export default GiftCard;