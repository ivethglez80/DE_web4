import Config from "./../../Data/event_Data";
import web41 from "./../../img/web4(1).png";

const Hero = () => {
    return (
        <>
            <div className="relative h-[700px]">
                <div className="absolute">
                <img src={web41} alt="foto de los novios" />
                </div>
                <div className="absolute w-screen mt-28">
                <h1 className="font-fuente1 text-center text-5xl">¡Nos casamos!</h1>
                <h1 className="font-fuente3 text-center text-7xl">Josias y Agustina</h1>
                </div>
            </div>
        </>
    )
}

export default Hero;