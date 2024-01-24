import { Link } from "react-router-dom"
import GiftCardGuests from "./../../cards/gifts/giftCardGuests"
import giftsData from "./../../Data/gifts_Data.json"

const ListaRegalos = () => {
    return (
        <>
            <div>
                This is ListaRegalos
                {giftsData.map(({ artImg, artName, artDescription, artLink, artStore }) => {
                return (
                    <GiftCardGuests
                        artImg={artImg}
                        artName={artName}
                        artDescription={artDescription}
                        artLink={artLink}
                        artStore={artStore}
                    />
                )
            })}  

                <button>
                    <Link to="/">Volver</Link>
                </button>
            </div>
        </>
    )
}

export default ListaRegalos;