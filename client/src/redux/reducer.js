import { GET_COUNTRIES, COUNTRY_BYID, COUNTRY_BYNAME, GET_ACTIVITIES, FILTER, ORDER } from './action-type';

const initialState = {
    activities: [],
    countries: [],
}

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_COUNTRIES:
            return {...state, countries: payload };
        case GET_ACTIVITIES:
            return {...state};
        case COUNTRY_BYID:
            return {...state};
        case COUNTRY_BYNAME:
            return {...state};
        case FILTER:
            return {...state};
        case ORDER:
            return {...state};
        default:
            return {...state};
    }
}

export default reducer;