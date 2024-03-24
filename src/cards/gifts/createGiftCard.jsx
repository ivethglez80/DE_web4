import { useState } from "react";
import axios, { formToJSON } from "axios";
import { useDispatch } from "react-redux";
import { postGift } from "./../../redux/actions";
import imgBase from "./../../img/giftBase.png";
import imageCompressor from 'compressorjs';


const CreateGiftCard = () => {

    const dispatch = useDispatch();

    const [form, setForm] = useState({
        imagen: "",
        nombre_art: "",
        descripcion: "",
        link: ""
    })

    const [imgFile, setImgFile] = useState(null);
    const [imgUrl, setImgUrl] = useState("");
    const imgbbApiKey = import.meta.env.VITE_imgbbApiKey;
    const imgbbUploadUrl = import.meta.env.VITE_imgbbUploadUrl;


    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        console.log("property", property, "value", value);

        setForm({ ...form, [property]: value });
    }

    const selectImage = (event) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];

            // Validaciones (ejemplo: tamaño menor a 5MB y formato jpg/png)
            if (file.size > 5242880) {
                alert("El archivo es demasiado grande (max. 5MB).");
                return;
            }
            if (!file.type.match('image/jpeg') && !file.type.match('image/png')) {
                alert("Solo se permiten imágenes en formato JPG o PNG.");
                return;
            }

            setImgFile(file);
            const previewUrl = URL.createObjectURL(file);
            setImgUrl(previewUrl); // Para la vista previa
        }
    };

    const handleImgUpload = async () => {
        if (imgFile) {
            console.log("Esta es imgFile", imgFile);
            try {
                new imageCompressor(imgFile, {
                    quality: 0.6, // ajusta la calidad de la imagen comprimida
                    success(result) {
                        const formData = new FormData();
                        formData.append("key", imgbbApiKey);
                        formData.append("image", result);
    
                        console.log("imgbbUploadUrl:", imgbbUploadUrl);
                        formData.forEach((value, key) => {
                            console.log(`${key}: ${value}`);
                        });
    
                        axios.post(imgbbUploadUrl, formData)
                            .then(response => {
                                console.log("Tipo de imagen", typeof(response.data.data.url));
                                setForm({ ...form, imagen: response.data.data.url });
                                URL.revokeObjectURL(imgUrl);
                                alert("La imagen ha sido cargada con éxito");
                                // Llamada a la función de envío después de cargar la imagen
                            })
                            .catch(error => {
                                console.error("Error al subir la imagen a imgbb:", error);
                                // Manejo adecuado del error
                            });
                    },
                    error(error) {
                        console.log('Error comprimiendo la imagen:', error.message);
                    },
                });
            } catch (error) {
                console.error("Error al comprimir la imagen:", error);
                // Manejo adecuado del error
            }
        }
    };


    const clearForm = () => {
        setForm({
            imagen: "",
            nombre_art: "",
            descripcion: "",
            link: ""
        });
        setImgFile(null);
        setImgUrl("");
    };

    const submitHandler = () => {
        console.log("datos en form:", form);
        dispatch(postGift(form))
        .then(res => {  
            alert("El regalo ha sido guardado con éxito");
            clearForm();
        })
        .catch(err => {
            console.error(err);
            alert("Ocurrió un error, vuelva a intentarlo");
        }); 
    };
    


    const postGiftUrl = import.meta.env.VITE_GIFTS_LIST || "http://localhost:3001/giftsDB";

    return (
        <>
        <p className="font-fuente4 tracking-widest pb-4 pt-2 text-center text-xl">Ingresar nueva opcion de regalo:</p>
        <div className="h-screen md:flex md:justify-center border border-b-color1">
            <div className="flex flex-col md:flex-row">
                <div className="">
                    <div className="flex flex-col">
                        <div className="flex justify-center">
                            <div className="w-[150px] h-[150px] bg-color3 flex items-center justify-center">
                                {imgUrl ? (
                                    <div className="">
                                        <img src={imgUrl} alt="Vista previa" />
                                    </div>
                                ) : (
                                    form.imagen ? (
                                        <div className="">
                                            <img src={form.imagen} alt="Vista previa" />
                                        </div>
                                    ) : (
                                        imgBase && (
                                            <div className="">
                                                <img src={imgBase} alt="Vista previa" />
                                            </div>
                                        )
                                    )
                                )}
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <input type="file" accept="image/*" onChange={selectImage} name="imagen" />
                        </div>
                        <div className="flex justify-center md:w-[300px]">
                            <button onClick={handleImgUpload} className="py-4 underline text-sm px-16 md:text-xs">IMPORTANTE: click aqui para aceptar y guardar Imagen, <br/> Esperar mensaje de confirmacion de carga para continuar</button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mx-12">
                    <input type="text" value={form.nombre_art} onChange={changeHandler} name="nombre_art" placeholder="Ingresa el nombre del articulo"
                        className="mb-4 pl-2 py-2 rounded-xl text-color3 text-xs border border-color1" />
                    <input type="text" value={form.descripcion} onChange={changeHandler} name="descripcion" placeholder="Ingresa la descripcion"
                        className="mb-4 pl-2 py-2 rounded-xl text-color3 text-xs border border-color1" />
                    <input type="text" value={form.link} onChange={changeHandler} name="link" placeholder="Ingresa el link para comprar"
                        className="mb-4 pl-2 py-2 rounded-xl text-color3 text-xs border border-color1" />
                    <div className="flex justify-center pt-6">
                        <button onClick={submitHandler} className="rounded-full w-[200px] font-fuente4 text-white bg-color3 p-2">Finalizar y enviar</button>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default CreateGiftCard;