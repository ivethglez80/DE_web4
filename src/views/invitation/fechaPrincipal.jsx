import SaveTheDate from "../../components/saveTheDate";
import Config from "../../Data/event_Data";
import month from "./../../img/month.svg";
import PartyPlace from "./partyPlace";
import place from "./../../img/place.svg";
import { Zoom } from "react-awesome-reveal";




const Fecha_principal = () => {

    const location = `${Config.wLINK}`;


    return (
        <>
            <div className="border border-color3 rounded-[65px] mx-2 mt-16 pt-24 pb-24">
                <Zoom delay={100}>

                <div className="flex justify-center pb-4">
                    <img src={month} alt="icono calendario" className="w-[60px]"/>
                </div>
                <div>
                    <h2 className="font-fuente3 text-color3 text-7xl text-center">Reservá la fecha</h2>
                </div>                
                <div className="mx-10 pt-6">
                    <p className="font-fuente4 text-color3 text-xl pb-1 border-b border-color3 text-center mb-6">1 de {Config.wMonthL} de {Config.wYear}</p>
                    <p className="font-fuente4 text-color3 text-xl pb-1 border-b border-color3 text-center mb-6">{Config.wHour}:{Config.wMin} HS</p>
                    <p className="font-fuente4 text-color3 text-xl pb-1 border-b border-color3 text-center mb-6">Rogamos tu puntualidad</p>
                </div>            
                <div>
                <SaveTheDate/>
                </div>
                
                <div className="flex justify-center pb-4 pt-24">
                    <img src={place} alt="icono ubicacion" className="w-[60px]" />
                </div>
                <div>
                    <p className="font-fuente3 text-color3 text-7xl text-center">Lugar</p>
                    <p className="font-fuente4 text-color3 text-xl text-center">Iglesia Sin-Heng.</p>
                    <p className="font-fuente6 text-color3 text-base text-center mb-6">Mendoza 1660, Belgrano</p>
                </div>
                <div>
                <a href={location} target="_blank" className="flex justify-center">
                    <button className="bg-color3 hover:bg-color2 rounded-xl py-1 w-4/6 md:w-2/6 font-fuente5 text-white tracking-wider">
                    Ver Ubicación
                    </button>
                </a>
                </div>
                </Zoom>
            </div>
        </>
    )
}

export default Fecha_principal;