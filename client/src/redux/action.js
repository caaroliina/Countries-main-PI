import { GET_COUNTRIES, COUNTRY_BYID, COUNTRY_BYNAME, GET_ACTIVITIES, FILTER, ORDER } from './action-type';
import axios from 'axios'

export const getCountries = () => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:3001/countries/`);
        const countries = response.data;
        dispatch({type: GET_COUNTRIES, payload: countries})
    }
}

export const countryById = (id) => {
    return async function(dispatch){
        const response = await axios.get(`http://localhost:3001/countries/${id}`)
        const country = response.data
        return dispatch({ type: COUNTRY_BYID, payload: country })
    }
}

export const countryByName = (name) => {
    return async function(dispatch){
        const response = await axios(`http://localhost:3001/countries/name?=${name}`)
        const country = response.data
        return dispatch({
            type: COUNTRY_BYNAME,
            payload: country,
        })
    }
}

export const getActivities = () => {
    return async function(dispatch){
        const response = (await axios(`http://localhost:3001/activities`)).data
        return dispatch({
            type: GET_ACTIVITIES,
            payload: response,
        })
    }
}

export const postActivities = () => {

}

export const filter = (id) => {
    return FILTER
}

export const order = (id) => {
    return ORDER
}