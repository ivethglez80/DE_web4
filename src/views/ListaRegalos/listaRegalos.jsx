import { Link } from "react-router-dom"
import GiftCardGuests from "./../../cards/gifts/giftCardGuests"
import { getGifts } from "../../redux/actions"
import Config from "./../../Data/event_Data";
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

    const availableGifts = gifts ? gifts.filter(gift => gift.disponible) : [];


    return (
        <>
            <div className="h-full bg-color1 pb-36">

                <div>
                <div className="flex justify-end py-2 pr-4">
                <button className="border border-color2 hover:bg-gray-700 rounded-full w-[160px] sm:w-[120px] font-fuente4 text-white">
                    <Link to="/">Volver</Link>
                </button>
                </div>
                <h1 className="font-fuente4 text-color2 uppercase text-2xl text-center pt-2">Lista de regalos</h1>
                <p className="pt-4 text-white text-center text-sm px-8">¡Estamos emocionados de celebrar nuestro día especial con ustedes!
                    Gracias por echar un vistazo a nuestra lista de regalos. </p>
                <p className="font-fuente4 text-white text-center text-sm px-8">Apreciamos mucho su amor y apoyo</p>
                <p className="font-fuente3 py-8 text-white text-center text-6xl px-8">{Config.novio} y {Config.novia}</p>

                </div>

                <div className="md:flex md:flex-row md:flex-wrap md:justify-evenly pl-10 pr-10 pb-10">
                {availableGifts ? availableGifts.map(({ id, imagen, nombre_art, descripcion, link, disponible,invitado }) => {
                return (
                    <GiftCardGuests
                    key={id}
                    id={id}
                    imagen={imagen}
                    nombre_art={nombre_art}
                    descripcion={descripcion}
                    link={link}
                    disponible={disponible}
                    />
                )
            }): (
                <p>no hay regalos que mostrar</p>
            )}  
            </div>
               
            </div>
        </>
    )
}

export default ListaRegalos;