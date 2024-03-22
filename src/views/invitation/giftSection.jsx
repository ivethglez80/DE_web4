import { useState } from "react";
import GiftOptionsCard from "../../cards/gifts/giftOptionsCard";
import gift from "./../../img/gift.svg";
import phone from "./../../img/phone.svg";
import Attendance from "./attendance";


const Gift_Section = () => {

    const [showCard, setShowCard] = useState(false);

    const toggleCard = () => {
        setShowCard(!showCard)
    };

    return (
        <>
        <div className="border border-color3 rounded-t-[65px] pb-32 pt-12">

            <div className="flex justify-center py-4 ">
                <img src={gift} alt="gift icon" className="w-[60px]" />
            </div>
            <div>
                <h2 className="font-fuente3 text-color3 text-7xl text-center">Regalos</h2>
            </div>
            <div className="mx-10 text-center pt-2">
                <span className="font-fuente4 text-color3 text-base text-center">
                Tu presencia es nuestro mejor regalo, pero &nbsp;                
                </span>
                <span className="font-fuente6 text-color3 text-base text-center">
                si queres obsequiarnos algo, &nbsp;                
                </span>
                <span className="font-fuente4 text-color3 text-base text-center">
                podes hacerlo de la siguiente manera                
                </span>
            </div>
            <div className="flex justify-center pt-6">
                <button className="bg-color3 hover:bg-color2 rounded-xl py-1 w-4/6 md:w-2/6 font-fuente5 text-white tracking-wider" onClick={toggleCard}>
                Ver opciones
                </button>
                {showCard && <GiftOptionsCard closeCard={toggleCard} />}
            </div>

            <div className="flex justify-center pt-24">
                <img src={phone} alt="icon phone" className="w-[60px]"/>
            </div>
            <div>
                <h2 className="font-fuente3 text-color3 text-7xl text-center">Confirmación</h2>
            </div>
            <div className="mx-12 text-center pt-2">
                <span className="font-fuente4 text-color3 text-base text-center">
                Estamos muy contentos de que puedas asistir. Es muy importante &nbsp;                
                </span>
                <span className="font-fuente6 text-color3 text-base text-center">
                que nos confirmes tu asistencia  &nbsp;                
                </span>
                <span className="font-fuente4 text-color3 text-base text-center">
                en este dia tan especial.
                </span>
            </div>
            <div>
                <Attendance />
            </div>
        
        </div>
        </>
    )
}

export default Gift_Section;