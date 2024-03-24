import { useState } from "react";
import { useNavigate } from "react-router-dom"



const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleLogin = async () => {
        const verifiedUser = import.meta.env.VITE_USER;
        const verifiedPassword = import.meta.env.VITE_PASSWORD;

        if ( userName === verifiedUser && password === verifiedPassword){
            const userToken = 'tokenOk'
            localStorage.setItem('userToken', userToken);            
            navigate('/admin');
        }else{
            setUserName("");
            setPassword("");
            alert ("Credenciales incorrectas");
        }
    };

    return (
        <>
        <div className="flex justify-center py-40">
        <div className="flex flex-col">
            <div className="pb-6">
                <h1 className="font-fuente4 text-color1 text-2xl uppercase text-center">Ingresar a <br/> panel de control</h1>
            </div>
            <div className="mb-6">                
            <p className="font-fuente4 text-color1 text-xl ">userName</p>
            <input type="text" value={userName} onChange={(e)=> setUserName(e.target.value)} className="bg-color3 font-fuente5 text-color2 text-2xl rounded-xl pl-4"/>
            </div>
            <div>                
            <p className="font-fuente4 text-color1 text-xl ">Password</p>
            <input type="text" value={password} onChange={(e)=> setPassword(e.target.value)} className="bg-color3 font-fuente5 text-color2 text-2xl rounded-xl pl-4"/>
            </div>
            <div className="flex justify-center">
            <button onClick={handleLogin} className="btn-silver w-[100px] mt-8 border-2 border-color3 rounded-full p-2">Login</button>
            </div>
        </div>
        </div>
        </>
    )

}

export default Login;