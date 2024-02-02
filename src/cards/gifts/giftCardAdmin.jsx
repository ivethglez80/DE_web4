import imgBase from "./../../img/giftBase.png"
import { useDispatch } from "react-redux"
import {deleteGift} from "./../../redux/actions"
import { Link } from "react-router-dom"


const GiftCard = ({ id, imagen, nombre_art, descripcion, link, disponible, invitado }) =>{

    const dispatch = useDispatch();
    const delGift = () => {
        if (window.confirm("¿Estás seguro de que quieres eliminar este regalo?")) {
            dispatch(deleteGift(id));
        }
    };


    return(
        <>
        <div className="border-2 border-red-100">
            <img src={imagen ? imagen : imgBase} alt={nombre_art} className="w-[170px]"/>
            <h3>{nombre_art || ""}</h3>
            <p>{descripcion || ""}</p>
            <a href={link || ""} target="_blank">
                {link ? "Se puede conseguir aqui"
                         : ""}
            </a>
             <p className="font-fuente1 text-color2 text-xl">{disponible ? "disponible ✔️" : "🎉 Seleccionado por:"}</p>
                    {!disponible &&
                        <p className="font-fuente1 text-color2 text-xl">{invitado ? invitado : "-anonimo-"}❤️</p>
                    }
            <Link to={`/giftmodify/${id}`} className="btn-silver">&nbsp; Modificar &nbsp;</Link>
            <button onClick={delGift} className="btn-silver w-[90px]">Eliminar</button>
        </div>
        </>
    )    
}

export default GiftCard