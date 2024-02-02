import {
    GET_GUESTS, PUT_ASISTE, POST_GUEST, MODIFY_GUEST,
    GET_GIFTS, PUT_DISPONIBLE, POST_GIFT, DELETE_GIFT, MODIFY_GIFT
} from "./actions";

const initialState = {
    guests: [],
    gifts: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GUESTS:
            return { ...state, guests: action.payload };
        case PUT_ASISTE:
            return {
                ...state,
                guests: state.guests.map(guest =>
                    guest.id === action.payload.id
                        ? { ...guest, asiste: action.payload.asiste }
                        : guest
                )
            };
        case POST_GUEST:
            return {
                ...state,
            };
        case MODIFY_GUEST:
            return {
                ...state,
                guests: state.guests.map(guest =>
                    guest.id === action.payload.id
                        ? { ...guest, ...action.payload }
                        : guest)
            };

        case GET_GIFTS:
            return { ...state, gifts: action.payload };
        case PUT_DISPONIBLE:
            return {
                ...state,
                gifts: state.gifts.map(gift =>
                    gift.id === action.payload.id
                        ? { ...gift, disponible: action.payload.disponible }
                        : gift
                )
            };

            
        case POST_GIFT:
            return {
                ...state,
            };
        case DELETE_GIFT:
            return {
                ...state,
                gifts: state.gifts.filter(gift => gift.id !== action.payload.id)
            };
        case MODIFY_GIFT:
            return {
                ...state,
                gifts: state.gifts.map(gift =>
                    gift.id === action.payload.id
                        ? { ...gift, ...action.payload }
                        : gift)
            };


        default:
            return { ...state };
    }
};

export default rootReducer;