import React, { useState, useEffect } from "react";
import Config from "./../Data/event_Data"


const CopyTextToClipboard = ({ info, value }) => {

    const [toCopy, setToCopy] = useState(false);
    let timeOut = null;

    useEffect(() => {
        return () => {
            if (timeOut) {
                clearTimeout(timeOut);
            }
        };
    }, []);

    const copyToClipboard = (textToCopy) => {
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                console.log(info + " copiado al portapapeles");
                toggleBtnTxt();
            })
            .catch(err => {
                console.error("error al copiar el texto", err);
            })
    };

    const toggleBtnTxt = () => {
        setToCopy(true);
        timeOut = setTimeout(() => {
            setToCopy(false);
        }, 3000);
    };


    return (
        <div className="flex justify-center">
        <button onClick={() => copyToClipboard(value)}
            className="bg-color3 text-white px-3 rounded-lg text-sm opacity-75"
            >
            {
                toCopy ? `${info} copiado` : `copiar ${info}`
            } 
        </button>
            </div>
    )
};

const BankData = () =>{
    return(
        <>
         <div className="col-span-1 w-full flex flex-col items-center font-fuente5 text-color3 py-6">
                        <p className="font-bold pb-4">BANCO: {Config.banco}</p>

                        <div className="flex flex-row pb-4">
                            <p>CBU: {Config.cbu}  <CopyTextToClipboard info="CBU" value={Config.cbu} /> </p>
                        </div>

                        <div className="flex flex-row">
                            <p>ALIAS: {Config.alias}  <CopyTextToClipboard info="Alias" value={Config.alias} /> </p>
                        </div>
    </div>
        </>
    )
}

export default BankData;