// import amor from "../../img/amorsm.png"

const CardOne = ({ form, onChangeHandler, onNext, onPrev, onClose, errors }) => {
    return (
        <>
            <div className="">
                {/* <img src={amor} alt="" className="hidden md:block md:absolute md:right-0 md:scale-80"/> */}
                <div className="bg-color3 rounded-b-xl pt-6 pb-2 px-8 w-5/6 mx-auto">
                    <p className="font-seasons text-white text-center text-xl">Hola, confirmanos tu asistencia</p>
                </div>
                <div className="flex justify-center mt-6 mb-2 md:justify-start">                    
                    <input type="text" value={form.nombre} onChange={onChangeHandler} name="nombre" placeholder="Ingresa tu nombre"
                    className="bg-lime-50 shadow-md p-3 font-julius rounded-xl w-5/6 text-xs md:w-1/3 md:ml-10"/>                    
                    {errors.nombre && <span className="absolute mt-10 text-pink-300">{errors.nombre}</span>}
                </div>
                <div className="flex justify-center md:justify-start">
                    <p className="font-julius text-xs w-5/6 text-center md:text-left md:w-1/3 md:ml-10">Si queres registrar a toda tu fAMILIA SIMPLEMENTE ingresá “familia” y el apellido</p>
                </div>
                <div className="flex justify-center mt-10 md:justify-end md:pr-10">
                <button onClick={onNext} className="font-julius text-sm rounded-3xl py-2 w-5/6 border border-color3">siguiente</button>
                </div>
                <div className="flex justify-center my-2 mt-12">
                <button onClick={onClose} className="font-juana text-sm underline text-gray-500 hover:text-black">Cerrar</button>
                {/* <img src={amor} alt="" className="hidden md:block md:absolute md:left-0 md:scale-80 md:-translate-y-8 md:z-[-50]"/> */}
                </div>

            </div>
                
                
            
            
        </>
    )
};

export default CardOne