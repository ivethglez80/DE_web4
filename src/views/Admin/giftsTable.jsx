import giftsData from "./../../Data/gifts_Data.json"
import GiftCardAdmin from "./../../cards/gifts/giftCardAdmin"

const GiftsTable = () => {
    return (
        <>
            this is the Gifts Table
            {giftsData.map(({ artImg, artName, artDescription, artLink, artStore }) => {
                return (
                    <GiftCardAdmin
                        artImg={artImg}
                        artName={artName}
                        artDescription={artDescription}
                        artLink={artLink}
                        artStore={artStore}
                    />
                )
            })}  
        </>
    )
}

export default GiftsTable;