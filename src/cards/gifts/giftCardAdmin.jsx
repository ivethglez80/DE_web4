import imgBase from "./../../img/giftBase.png"
import { useDispatch } from "react-redux"
import { deleteGift } from "./../../redux/actions"
import { Link } from "react-router-dom"


const GiftCard = ({ id, imagen, nombre_art, descripcion, link, disponible, invitado }) => {

    const dispatch = useDispatch();
    const delGift = () => {
        if (window.confirm("¿Estás seguro de que quieres eliminar este regalo?")) {
            dispatch(deleteGift(id));
        }
    };


    return (
        <>
            <div className="border-b border-color1 py-4 m-8 rounded-3xl shadow-xl">
                <div className="flex justify-center">
                    <img src={imagen ? imagen : imgBase} alt={nombre_art} className="w-[170px]" />
                </div>
                <h3 className="font-fuente4 text-base text-center">{nombre_art || ""}</h3>
                <p className="font-fuente4 text-xs text-center pb-2">{descripcion || ""}</p>
                <div className="flex justify-center pb-2">
                <a href={link || ""} target="_blank">
                    {link ? "click aqui para obtenerlo"
                        : ""}
                </a>
                        </div>
                <p className="font-fuente4 text-color1 text-xs text-center py-4">{disponible ? "disponible ✔️" : "🎉 Seleccionado por:"}</p>
                {!disponible &&
                    <p className="font-fuente1 text-color1 text-xl text-center">{invitado ? invitado : "-anonimo-"}❤️</p>
                }
                <div className="flex justify-evenly">
                    <Link to={`/giftmodify/${id}`} className="underline hover:text-gray-600">&nbsp; Modificar &nbsp;</Link>
                    <button onClick={delGift} className="underline hover:text-gray-600 pl-6">Eliminar</button>
                </div>
            </div>
        </>
    )
}

export default GiftCard