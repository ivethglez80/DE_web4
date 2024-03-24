import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { modifyGift } from "./../../redux/actions";
import Footer from "../../components/footer";
import imgBase from "./../../img/giftBase.png"
import axios from "axios";




const GiftModify = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    const gifts = useSelector(state => state.gifts);
    console.log("gifts", gifts);

    const selectedGift = Object.values(gifts).find(gift => gift.id === id);
    console.log("selectedGift :", selectedGift);

    const [form, setForm] = useState({
        id: id,
        nombre_art: selectedGift.nombre_art,
        imagen: selectedGift.imagen,
        nombre_art: selectedGift.nombre_art,
        descripcion: selectedGift.descripcion,
        link: selectedGift.link,
        disponible: selectedGift.disponible
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
            console.log("esta es imgfile", imgFile);
            try {
                const formData = new FormData();
                formData.append("key", imgbbApiKey);
                formData.append("image", imgFile);

                console.log("imgbbUploadUrl:", imgbbUploadUrl);
                formData.forEach((value, key) => {
                    console.log(`${key}: ${value}`);
                });

                const response = await axios.post(imgbbUploadUrl, formData);
                console.log("tipo de imagen", typeof (response.data.data.url));
                setForm({ ...form, imagen: response.data.data.url });
                URL.revokeObjectURL(imgUrl);

                // Llamada a la función de envío después de cargar la imagen
            } catch (error) {
                console.error("error al subir la imagen a imgbb:", error);
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
        dispatch(modifyGift(form))
            .then(() => {
                alert("Se ha modificado el regalo con exito")
            })
            .catch(err => alert("error al modificar" + err.message))
    };


    return (
        <>
            <div className="relative">

            </div>

            <div className="pt-4 pr-16">
                
                <div className="flex justify-end">
                    <Link to="/admin" className="border-2 border-color3 px-4 rounded-xl text-color3">volver</Link>
                </div>
            </div>

            <div className="text-center pt-12">
                <h1 className="font-fuente6 text-color3 text-xl uppercase">Modificar Regalo:</h1>
            </div>


            <div className="flex flex-col md:flex-row md:justify-evenly">{/*contenedor del form */}
                <div className="mx-auto md:mx-0">{/*contenedor imagen */}
                    <div className="flex flex-col items-center">
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
                        <div className="my-2">
                            <input type="file" accept="image/*" onChange={selectImage} name="imagen" className="border border-color3 py-2 shadow-lg" />
                        </div>

                        <button onClick={handleImgUpload} className="underline py-4">Confirmar nueva imagen</button>
                    </div>
                </div>
                <div className=" mt-4"> {/*inputs texts */}
                    <div className="flex justify-center">
                        <input type="text" value={form.nombre_art} onChange={changeHandler} name="nombre_art" placeholder={form.nombre_art}
                            className="bg-color3 text-white font-fuente5 text-xl mb-4 py-2 pl-2 rounded-xl md:w-[300px]" />
                    </div>
                    <div className="flex justify-center">
                        <input type="text" value={form.descripcion} onChange={changeHandler} name="descripcion" placeholder="Descripcion"
                            className="bg-color3 text-white font-fuente5 text-xl mb-4 py-2 pl-2 rounded-xl md:w-[300px]" />
                    </div>
                    <div className="flex justify-center">
                        <input type="text" value={form.link} onChange={changeHandler} name="link" placeholder="Link para obtenerlo"
                            className="bg-color3 text-white font-fuente5 text-xl mb-4 py-2 pl-2 rounded-xl md:w-[300px]" />
                    </div>
                </div>
            </div>
            <div>
            </div>
            <div className="flex justify-center pt-4 mb-16">
                <button onClick={submitHandler} className="border-2 border-color3 rounded-2xl p-2 w-[150px]">Finalizar y enviar</button>
            </div>
            
        </>
    )
}

export default GiftModify;