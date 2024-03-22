import Config from "./../../Data/event_Data"
const End = () => {
    return (
        <>
            <div className="bg-color3 text-white py-12">
                <div className="mx-12">
                    <p className="font-fuente4 text-base text-center">Por consiguiente, ya no son dos, sino una sola carne. Por tanto, lo que Dios ha unido, ningún hombre lo separe. Mateo 16:9</p>
                </div>
                <div className="pt-6">
                    <p className="font-fuente3 text-7xl text-center">¡Te esperamos!</p>
                    <h1 className="font-fuente3 text-5xl text-center">{Config.novio} y {Config.novia}</h1>
                    
                </div>

            </div>
        </>
    )
}

export default End;