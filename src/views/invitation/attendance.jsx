import { useState } from "react";
import AttConfFormToDB from "./../../components/attConfFormToDB"

const Attendance = () => {

    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm)
    }


    return (
        <>
            <div className="w-screen flex justify-center pt-6">

                <button className="bg-color3 hover:bg-color2 rounded-xl py-1 w-4/6 md:w-2/6 font-fuente5 text-white tracking-wider" onClick={toggleForm}>
                Confirmar
                </button>
                {showForm && <AttConfFormToDB closeForm={toggleForm} />}
            </div>
        </>
    )
}

export default Attendance;