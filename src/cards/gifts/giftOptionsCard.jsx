import { Link } from "react-router-dom";
import BankData from "../../components/bankData";






const GiftOptionsCard = ({ closeCard }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative border-4 border-color3 rounded-xl w-11/12 max-w-2xl bg-white p-4 z-10">
                <button onClick={closeCard} className="bg-color3 text-white px-3 rounded-lg absolute top-2 right-2">X</button>


                <div className="">
                    <div>
                        <p className="font-fuente6 text-center pt-6 text-color3 text-xl">Deposito o transferencia:</p>
                        <BankData />
                    </div>

                    <div className="pt-6">
                        <p className="font-fuente6 text-center pt-6 text-color3 text-xl">Lista de regalos</p>
                        <div className="flex justify-center pt-4 pb-6">
                            <button className="bg-color3 text-white px-6 rounded-lg text-sm opacity-75">
                                <Link to="/lista-de-regalos">Ver</Link>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default GiftOptionsCard;