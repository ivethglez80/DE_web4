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
            this is the Gifts Table
            {gifts.map(({ id, imagen, nombre_art, descripcion, link, disponible, invitado }) => {
                return (
                    <GiftCardAdmin
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
        </>
    )
}

export default GiftsTable;