import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getGuests } from "./../../redux/actions";
import Card from "./guestCard";
import { useSelector } from "react-redux";

import Config from "./../../Data/event_Data"


const GuestCardsContainer = () => {
    const dispatch = useDispatch();

    
    useEffect(() => {
        dispatch(getGuests());
    }, [dispatch]);
    
    const guests = useSelector(state => state.guests);
    console.log("en el container", guests);
    
    const confOk = guests.reduce((total, guest) => {
        if (guest.asiste){
            return total + guest.cantidad;
        }
        return total;
    },0);

    return (
        <>
            {/* <pre>{JSON.stringify(guests, null, 2)}</pre> */}
            <div className="bg-gradient-to-b from-[#345151] from-10% via-[#345051] via-50% to-[#89c5bb] h-full pb-12">
               
                <div>
                <div className="w-5/6 mx-auto pt-6">
                    <div className="flex flex-row text-white">
                        <div className="w-1/5 flex justify-center">
                            <p>Cant</p>
                        </div>
                        <div className="w-3/5 pl-2">
                            <p>Nombre</p>
                        </div>
                        <div className="w-1/5 flex justify-center">
                            <p>Asistencia: </p> <p>{confOk}</p>
                        </div>
                    </div>
                    
                    {guests.map(guest => {
                        return <Card
                            key={guest.id}
                            id={guest.id}
                            nombre={guest.nombre}
                            apellido={guest.apellido}
                            telefono={guest.telefono}
                            email={guest.email}
                            cantidad={guest.cantidad}
                            asiste={guest.asiste}
                        ></Card>
                    })
                    }
                    </div>
                </div>
            </div>
        </>
    )
}

export default GuestCardsContainer