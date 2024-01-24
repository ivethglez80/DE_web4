import { useState } from "react";
import AttConfFormToDB from "./../../components/attConfFormToDB"

const Attendance = () => {

    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm)
    }


    return (
        <>
            <div>
                This is Attendance
                <button className="bg-color1 hover:bg-color2 rounded-full py-2 w-4/6 md:w-2/6 font-fuente1 text-white" onClick={toggleForm}>
            CONFIRMAR ASISTENCIA
        </button>
        {showForm && <AttConfFormToDB closeForm = {toggleForm}/>}
            </div>
        </>
    )
}

export default Attendance;