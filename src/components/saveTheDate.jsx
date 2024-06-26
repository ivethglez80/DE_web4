import Config from "./../Data/event_Data";

const SaveTheDate = () => {
    const text = `Boda ${Config.novia} y ${Config.novio}`;
    const dates = `${Config.wYear}${Config.wMonth}${Config.wDia}T${Config.wHour}${Config.wMin}00Z/${Config.wYear}${Config.wMonth}${Config.wDia}T${Config.wHourEnds}${Config.wMin}00Z`;
    const details = "detalles";
    const location = `${Config.wLINK}`;
    // const eventLink = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Nombre+del+Evento&dates=20240101T120000Z/20240101T130000Z&details=Descripción+del+Evento&location=Ubicación";
    const eventLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${dates}&details=${details}&location=${location}`;



    return (
        <>
            <div>
                <a href={eventLink} target="_blank" rel="noopener noreferrer" className="flex justify-center ">
                    <button className="bg-color3 hover:bg-color2 rounded-xl py-1 w-4/6 md:w-2/6 font-fuente5 text-white tracking-wider">
                        Agendar
                    </button>

                </a>
            </div>
        </>
    )
};

export default SaveTheDate;