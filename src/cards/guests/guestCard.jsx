import { useDispatch } from "react-redux";
import { useState } from "react";
import { putAsiste } from "../../redux/actions";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
import GuestDetail from "./guestDetail"

const Card = ({ id, nombre, apellido, telefono, email, cantidad, asiste }) => {

    const dispatch = useDispatch();

    const toggleAsiste = () => {
        dispatch(putAsiste(id, asiste))
    }

     const [showDetail, setShowDetail] = useState(false);

    const toggleDetail = (e) => {
        e.stopPropagation(); // Detiene la propagación del evento al padre
        setShowDetail(!showDetail);
    }

    const closeDetail = () => setShowDetail(!showDetail);


    return (
        <>
            <div className="flex flex-row gap-1 bg-[#8597bf] my-2">
                <div className="w-1/5 flex justify-center bg-white py-2 hover:bg-gray-400">
                    <span>{cantidad}</span>
                </div>

                <div className="w-3/5 bg-white hover:bg-gray-400 pl-2 flex items-center" onClick={toggleDetail}>
                    <span>{nombre}</span>
                </div>

                <div className="w-1/5 bg-white hover:bg-gray-400 flex justify-center">
                    <button onClick={toggleAsiste}>
                        {asiste ? <FaCheckCircle className="text-xl text-[#667494]" /> : <FaCircleXmark className="text-xl text-[#667494]" />}
                    </button>
                </div>                
            </div>
            {showDetail && <GuestDetail id={id} nombre={nombre} apellido={apellido} telefono={telefono} email={email} cantidad={cantidad} asiste={asiste} closeDetail={closeDetail} />}
        </>
    )
};

export default Card;