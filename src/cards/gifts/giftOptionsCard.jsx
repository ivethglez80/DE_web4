import { Link } from "react-router-dom";
import BankData from "../../components/bankData";






const GiftOptionsCard = ({ closeCard }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative border-4 border-color1 rounded-xl w-11/12 max-w-2xl bg-white p-4 z-10">
                <button onClick={closeCard} className="bg-color1 text-white px-3 rounded-lg absolute top-2 right-2">X</button>
                

                    <div className="flex justify-evenly">
                        <div>
                            <BankData />
                        </div>
                        <div>
                            <button>
                                <Link to="/lista-de-regalos">lista de regalos</Link>
                            </button>
                        </div>
                    </div>
                
            </div>
        </div>
    );
};

export default GiftOptionsCard;