import Config from "./../../Data/event_Data";
import web41 from "./../../img/web4(1).png";
import { Fade } from "react-awesome-reveal";





const Hero = () => {
    return (
        <>
            <div className="relative min-[300px]:h-[700px] min-[390px]:h-[750px]">
                <div className="absolute">
                <img src={web41} alt="foto de los novios" />
                </div>
                <div className="absolute w-screen mt-28">
                <h1 className="font-fuente1 text-center text-5xl ">¡Nos casamos!</h1>
                <Fade direction="up" triggerOnce={true}>
                <h1 className="font-fuente3 text-center text-7xl animate__animated animate__slideInDown">Josias y Agustina</h1>
                </Fade>
                </div>
            </div>
        </>
    )
}

export default Hero;

