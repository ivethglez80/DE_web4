import Hero from "./hero";
import CountDown from "./countDown";
import Fecha_principal from "./fechaPrincipal";
import PartyPlace from "./partyPlace";
import DressCode from "./dressCode";
import PhotoCarrousel from "./fotoCarrousel";
import FocusPhoto from "./focusPhoto";
import Gift_Section from "./giftSection";
import Attendance from "./attendance";
import End from "./end";


const Home = () => {
    return (
        <>
            <div>
                <Hero />
                <CountDown />
                <Fecha_principal />
                <PartyPlace />
                <DressCode />
                <PhotoCarrousel />
                <FocusPhoto />
                <Gift_Section />
                <Attendance />
                <End />
            </div>
        </>
    )
}

export default Home;