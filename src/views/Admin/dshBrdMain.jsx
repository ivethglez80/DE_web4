import { useState } from "react";
import GuestTable from "./guestsTable";
import GiftsTable from "./giftsTable";
import CreateGiftCard from "../../cards/gifts/createGiftCard";
import { useNavigate } from "react-router-dom";


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
            <div>
                This is DshBrd_Main

                <ul>
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
                        <button onClick={handleLogOut} className="underline text-base pl-5 pr-2">Cerrar <br /> Sesion</button>
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