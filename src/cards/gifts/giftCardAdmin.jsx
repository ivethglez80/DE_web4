import imgBase from "./../../img/giftBase.png"


const GiftCard = ({ id, imagen, nombre_art, descripcion, link, disponible, invitado }) =>{
    return(
        <>
        <div className="border-2 border-red-100">
            <img src={imagen ? imagen : imgBase} alt={nombre_art} className="w-[170px]"/>
            <h3>{nombre_art || ""}</h3>
            <p>{descripcion || ""}</p>
            <a href={link || ""} target="_blank">
                {link ? "Se puede conseguir aqui"
                         : ""}
            </a>
            <p>{disponible ? "disponible" : "Ya fue seleccionado"}</p>         
            <p>{disponible===false && invitado ? invitado : "---"}</p>
        </div>
        </>
    )    
}

export default GiftCard