import Config from "./../../Data/event_Data"

const PartyPlace = () => {
    const location = `${Config.wLINK}`;

    return (
        <>
            <div>
                <div className="pb-6">
                    <h2 className="pb-4 text-center">*{Config.wPlace}*</h2>
                    <p className="text-center">{Config.wDir1}</p>
                    <p className="text-center">{Config.wDir2}</p>
                </div>

                <a href={location} target="_blank" className="flex justify-center">
                    <button className="bg-color1 hover:bg-color2 rounded-full py-2 w-4/6 md:w-2/6 font-fuente1 text-white">
                        ver ubicacion
                    </button>
                </a>
            </div>
        </>
    )
}

export default PartyPlace;