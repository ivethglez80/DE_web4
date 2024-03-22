import web3 from "./../../img/web4(3).png";
import web4 from "./../../img/web4(4).png";
import web5 from "./../../img/web4(5).png";



const PhotoCarrousel = () => {
    return (
        <>
            <div>
                <div className="my-8">
                    <p className="font-fuente3 text-color3 text-6xl text-center">Nuestro para siempre</p>
                </div>
                <div className="flex justify-center">
                    <img src={web3} alt="wedders pic" className="w-11/12 mb-6"/>
                </div>
                <div className="flex justify-center">
                    <img src={web4} alt="wedders pic" className="w-11/12 mb-6"/>
                </div>
                <div className="flex justify-center">
                    <img src={web5} alt="wedders pic" className="w-11/12 mb-6"/>
                </div>
            </div>
        </>
    )
}

export default PhotoCarrousel;