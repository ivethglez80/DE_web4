import SaveTheDate from "../../components/saveTheDate";
import Config from "../../Data/event_Data";
// import imgCard3 from "./../../img/card3.png"

const CardThree = ({onClose}) => {
    return (
        <>
            <div className="bg-color3 mt-4 mx-4 rounded-t-full pb-32 relative overflow-hidden md:w-1/2 md:mx-auto">
                {/* <img src={imgCard3} alt="" className="absolute scale-150" /> */}

                <div className="pt-24 md:pt-16 pb-6 md:pb-2 flex justify-center md:px-10">
                    <h3 className="font-fuente4 text-white text-xl text-center w-5/6">Gracias por confirmar tu asistencia</h3>
                </div>

                <div className="flex flex-row justify-center text-white">
                    <div className="flex items-baseline">
                        <h1 className="font-fuente3 text-6xl md:text-5xl ">{Config.novio} y {Config.novia}</h1>
                        
                    </div>

                   
                </div>

                <div className="absolute bottom-0 w-full flex flex-col justify-center px-auto">                   
                    <button onClick={onClose} className="font-juana text-base underline text-gray-400 py-3">Cerrar</button>
                </div>

            </div>
        </>
    )
};

export default CardThree;