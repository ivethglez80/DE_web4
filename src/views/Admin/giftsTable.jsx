import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import giftsData from "./../../Data/gifts_Data.json"
import {getGifts} from "./../../redux/actions"
import GiftCardAdmin from "./../../cards/gifts/giftCardAdmin"

const GiftsTable = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getGifts());
    },[dispatch]);

    const gifts = useSelector(state=>state.gifts)

    return (
        <>
        <div className="h-full">
        <p className="font-fuente4 text-icons pl-4 tracking-widest pb-1 pt-0 text-xl text-center">Lista de regalos</p>
        <div className="pb-20 ">                
        {gifts.map(({ id, imagen, nombre_art, descripcion, link, disponible, invitado }) => {
            return (
                <GiftCardAdmin
                key={id}
                id={id}
                imagen={imagen}
                nombre_art={nombre_art}
                descripcion={descripcion}
                link={link}
                disponible={disponible}
                invitado = {invitado}
                />
                )
            })}  
        </div>
        </div>
    </>
    )
}

export default GiftsTable;