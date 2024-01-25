import { Link } from "react-router-dom"
import GiftCardGuests from "./../../cards/gifts/giftCardGuests"
import { getGifts } from "../../redux/actions"

import giftsData from "./../../Data/gifts_Data.json"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

const ListaRegalos = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getGifts());
    },[dispatch]);

    const gifts = useSelector(state=>state.gifts)
    console.log("en listaregalos para invitados:", gifts);

    const availableGifts = gifts.filter(gift => gift.disponible);

    return (
        <>
            <div>
                This is ListaRegalos
                {availableGifts.map(({ id, imagen, nombre_art, descripcion, link, disponible,invitado }) => {
                return (
                    <GiftCardGuests
                    id={id}
                    imagen={imagen}
                    nombre_art={nombre_art}
                    descripcion={descripcion}
                    link={link}
                    disponible={disponible}
                    />
                )
            })}  

                <button>
                    <Link to="/">Volver</Link>
                </button>
            </div>
        </>
    )
}

export default ListaRegalos;