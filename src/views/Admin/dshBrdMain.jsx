import { useState } from "react";
import GuestTable from "./guestsTable";
import GiftsTable from "./giftsTable";
import CreateGiftCard from "../../cards/gifts/createGiftCard";
import { useNavigate } from "react-router-dom";
import ring from "./../../img/ring.png";


const DshBrd_Main = () => {

    const navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.removeItem('userToken');
        navigate('/login');
    }

    const [guestsTable, setGuestsTable] = useState(true);
    const [giftsTable, setGiftsTable] = useState(false);
    const [newgiftCard, setNewGiftCard] = useState(false);

    const handleGuestsTable = () => {
        setGuestsTable(true)
        setGiftsTable(false)
        setNewGiftCard(false)
    }

    const handleGiftsTable = () => {
        setGuestsTable(false)
        setGiftsTable(true)
        setNewGiftCard(false)
    }

    const handleCreateGift = () => {
        setGuestsTable(false)
        setGiftsTable(false)
        setNewGiftCard(true)
    }

    return (
        <>
        <div className=" text-icons">
            <div className="flex flex-row justify-between items-center gap-6 pl-6 pt-2 border-b border-b-color3 pb-2">
            <img src={ring} alt="anillos png" className="h-[40px]"/>
            <p className="font-fuente4 text-color1 text-base">Tablero de control</p>
            <button onClick={handleLogOut} className="underline pl-5 pr-2 text-xs">Cerrar <br /> Sesion</button>
            </div>
            

            <ul className="flex flex-row justify-between pb-4 p-4 underline border-b border-b-color3 text-sm">
                <li onClick={handleGuestsTable}>
                    Lista invitados
                </li>
                <li onClick={handleGiftsTable}>
                    Lista regalos
                </li>
                <li onClick={handleCreateGift}>
                    Ingresar nuevo regalo
                </li>
                <div>
                   
                </div>
            </ul>

            <div>
                {guestsTable ? <GuestTable /> : ""}
                {giftsTable ? <GiftsTable /> : ""}
                {newgiftCard ? <CreateGiftCard /> : ""}
            </div>
        </div>
    </>
    )
}

export default DshBrd_Main;