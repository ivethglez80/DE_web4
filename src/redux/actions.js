import axios from "axios";

export const GET_GUESTS = "GET_GUESTS"
export const PUT_ASISTE = "PUT_ASISTE"
export const POST_GUEST = "POST_GUEST"
export const MODIFY_GUEST = "MODIFY_GUEST"

export const GET_GIFTS = "GET_GIFTS"
export const PUT_DISPONIBLE = "PUT_DISPONIBLE"
export const POST_GIFT = "POST_GIFT"
export const DELETE_GIFT = "DELETE_GIFT"
export const MODIFY_GIFT = "MODIFY_GIFT"


// const guestDBUrl = import.meta.env.VITE_GUESTS_LIST || "http://localhost:3001/guestsDB";
// const guestModifyURL = import.meta.env.VITE_GUESTS_MOD || "http://localhost:3001/guestsDB/modify"
// const giftDBUrl = import.meta.env.VITE_GIFTS_LIST || "http://localhost:3001/giftsDB";
// const giftModifyURL = import.meta.env.VITE_GIFTS_MOD || "http://localhost:3001/giftsDB/modify"


const guestDBUrl = import.meta.env.VITE_GUESTS_LIST_DEPLOY;
const guestModifyURL = import.meta.env.VITE_GUESTS_MOD_DEPLOY;
const giftDBUrl = import.meta.env.VITE_GIFTS_LIST_DEPLOY;
const giftModifyURL = import.meta.env.VITE_GIFTS_MOD_DEPLOY;

console.log("este es guestDBURL:", guestDBUrl); 
console.log("este es giftDBUrl:", giftDBUrl);

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

export const modifyGuest = (payload) => {
    return async (dispatch) => {
        try {
            let modifiedGuest = await axios.put(guestModifyURL, payload)
            return dispatch({
                type: MODIFY_GUEST,
                payload: modifiedGuest.data
            })
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
            console.log("gifts son estos",gifts);
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

export const deleteGift = (id) => {
    return async (dispatch) => {
        try {
            await axios.delete(giftDBUrl, { data: {id}});
            dispatch({
                type: DELETE_GIFT,
                payload: {id}
            }
            )
        } catch (error) {
            console.log(error);
        }
    }
}

export const modifyGift = (payload) => {
    return async (dispatch) =>{
        try {
            let modifiedGift = await axios.put(giftModifyURL, payload);
            return dispatch({
                type: MODIFY_GIFT,
                payload: modifiedGift.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}