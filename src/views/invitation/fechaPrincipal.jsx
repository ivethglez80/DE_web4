import SaveTheDate from "../../components/saveTheDate";
import Config from "../../Data/event_Data";

const Fecha_principal = () => {
    return (
        <>
            <div>
                
                <div>{Config.wDia} {Config.wMonthL}</div>            
                <div>{Config.wHour}:{Config.wMin} am</div>
                <SaveTheDate/>
            </div>
        </>
    )
}

export default Fecha_principal;