import axios from "axios";

export const GET_GUESTS = "GET_GUESTS"
export const PUT_ASISTE = "PUT_ASISTE"
export const POST_GUEST = "POST_GUEST"

export const GET_GIFTS = "GET_GIFTS"
export const PUT_DISPONIBLE = "PUT_DISPONIBLE"
export const POST_GIFT = "POST_GIFT"


const guestDBUrl = import.meta.env.VITE_GUESTS_LIST || "http://localhost:3001/guestsDB";
const giftDBUrl = import.meta.env.VITE_GIFTS_LIST || "http://localhost:3001/giftsDB";
//const guestDBUrl = import.meta.env.VITE_BACK_DEPLOY;

 
export const getGuests = () => {
    return async function (dispatch) {
        try {
            const apiData = await axios.get(guestDBUrl);
            const guests = apiData.data;
            console.log(guests);
            dispatch({ type: GET_GUESTS, payload: guests });
        } catch (error) {
            console.error(error);
        }
    };
};

export const putAsiste = (id, asiste) => {
    return async function (dispatch) {
        try {
            const updtAsste = {id:id, asiste:!asiste}
            const response = await axios.put(guestDBUrl, updtAsste)
            if (response.status === 200){
                dispatch({type: PUT_ASISTE, payload: response.data});
            }else{
                console.error("error: ", response);
            }
        } catch (error) {
            console.error("error: ", error);
        }
    }
};

export const postGuest = (payload) =>{
    return async (dispatch)=>{
        try {
            let createGuest = await axios.post(guestDBUrl, payload);
            return dispatch({
                type: POST_GUEST,
                payload: createGuest.data
            }             
            )
        } catch (error) {
            console.log(error);
        }
    }
}










export const getGifts = () => {
    return async function (dispatch) {
        try {
            const apiData = await axios.get(giftDBUrl);
            const gifts = apiData.data;
            console.log(gifts);
            dispatch({ type: GET_GIFTS, payload: gifts });
        } catch (error) {
            console.error(error);
        }
    };
};

export const putDisponible = (id, disponible, invitado) => {
    console.log("en actions:", id, disponible, invitado);
    return async function (dispatch) {
        try {
            const updtDisponible = {id:id, disponible:!disponible, invitado:invitado}
            const response = await axios.put(giftDBUrl, updtDisponible)
            if (response.status === 200){
                dispatch({type: PUT_DISPONIBLE, payload: response.data});
            }else{
                console.error("error: ", response);
            }
        } catch (error) {
            console.error("error: ", error);
        }
    }
};

export const postGift = (payload) =>{
    return async (dispatch)=>{
        try {
            let createGift = await axios.post(giftDBUrl, payload);
            return dispatch({
                type: POST_GIFT,
                payload: createGift.data
            }             
            )
        } catch (error) {
            console.log(error);
        }
    }
}