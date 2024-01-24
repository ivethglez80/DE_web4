import { useState } from "react";
import GuestTable from "./guestsTable";
import GiftsTable from "./giftsTable";

const DshBrd_Main = () => {

    const [guestsTable, setGuestsTable] = useState(true);
    const [giftsTable, setGiftsTable] = useState(false);

    const handleGuestsTable = () => {
        setGuestsTable(true)
        setGiftsTable(false)
    }

    const handleGiftsTable = () => {
        setGuestsTable(false)
        setGiftsTable(true)
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
                </ul>

                <div>
                    {guestsTable ? <GuestTable /> : ""}
                    {giftsTable ? <GiftsTable /> : ""}
                </div>
            </div>
        </>
    )
}

export default DshBrd_Main;