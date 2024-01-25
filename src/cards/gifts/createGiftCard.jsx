import { useState } from "react";
import axios, { formToJSON } from "axios";
import { useDispatch } from "react-redux";
import { postGift } from "./../../redux/actions"


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
                console.log("tipo de imagen", typeof(response.data.data.url));
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
        dispatch(postGift(form))
        .then(res => {                                        
            clearForm();
        })
        .catch(err => alert(err)) 
    };


    const postGiftUrl = import.meta.env.VITE_GIFTS_LIST || "http://localhost:3001/giftsDB";

    return (
        <>
            Aqui vamos a poder crear un nuevo regalo
            <input type="file" accept="image/*" onChange={selectImage} name="imagen" />
            {imgUrl && (
                <div>
                    <img src={imgUrl} alt="Vista previa" />
                </div>
            )}
            <button onClick={handleImgUpload}>Cargar Imagen</button>
            <input type="text" value={form.nombre_art} onChange={changeHandler} name="nombre_art" placeholder="Ingresa el nombre del articulo" />
            <input type="text" value={form.descripcion} onChange={changeHandler} name="descripcion" placeholder="Ingresa la descripcion" />
            <input type="text" value={form.link} onChange={changeHandler} name="link" placeholder="Ingresa el link para comprar" />
            <button onClick={submitHandler} >Finalizar y enviar</button>
        </>
    )
}

export default CreateGiftCard;