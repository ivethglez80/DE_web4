import { useState } from "react";
import GiftOptionsCard from "../../cards/gifts/giftOptionsCard";

const Gift_Section = () => {

    const [showCard, setShowCard] = useState(false);

    const toggleCard = () => {
        setShowCard(!showCard)
    };

    return (
        <>
            <div>
                This is Gift_Section
                <button className="bg-color1 hover:bg-color2 rounded-full py-2 w-4/6 md:w-2/6 font-fuente1 text-white" onClick={toggleCard}>
                    VER OPCIONES
                </button>
                {showCard && <GiftOptionsCard closeCard={toggleCard} />}
            </div>
        </>
    )
}

export default Gift_Section;