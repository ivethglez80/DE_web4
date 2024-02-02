import { Link } from "react-router-dom";

const GuestDetail = ({ id, nombre, apellido, telefono, email, cantidad, asiste, comentarios, closeDetail }) => {
    return (
        <>
        <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative border-0 border-color1 rounded-xl w-11/12 max-w-2xl bg-white p-1 z-10">

            <button onClick={closeDetail}>
                cerrar
            </button>

            <div className="">

                <div className="flex justify-center gap-5 mb-3">
                    <h2 className="">Nombre: {nombre}</h2>
                    <h2>{apellido ? apellido : "apellido"}</h2>
                </div>

                <div className="flex justify-center gap-5 mb-3">
                    <div>
                        <a href={`mailto:${email}`}><p>Email: {email}</p></a>
                    </div>
                    <div>
                        <a href={`https://api.whatsapp.com/send?phone=${telefono}&text=Hola!`} target="_blank"><p>Telefono: {telefono}</p></a>
                    </div>
                </div>

                <div className="flex justify-center mb-3">
                    <p>Grupo familiar: {cantidad}</p>
                </div>

                <div className="flex justify-center">
                    <p>Asiste: {asiste ? "Si" : "No"}</p>
                </div>

                {comentarios && (
                            <div className="flex flex-row justify-center gap-4 pt-4">
                                <p>Comentarios: {comentarios}</p>
                            </div>
                        )}

            </div>
            <div className=" flex justify-evenly">
                        <div className="">
                            <Link to={`/guestmodify/${id}`} className="btn-silver py-2">&nbsp; Modificar &nbsp;</Link>
                        </div>
                        <div className="">
                            <button onClick={closeDetail} className="btn-silver w-[90px]">
                                cerrar
                            </button>
                        </div>
                    </div>
            </div>
            </div>
        </>
    )
}

export default GuestDetail;