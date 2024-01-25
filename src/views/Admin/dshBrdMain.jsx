import { useState } from "react";
import GuestTable from "./guestsTable";
import GiftsTable from "./giftsTable";
import CreateGiftCard from "../../cards/gifts/createGiftCard";

const DshBrd_Main = () => {

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