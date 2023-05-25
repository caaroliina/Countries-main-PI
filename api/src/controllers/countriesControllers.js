const { Country } = require('../db.js');
const axios = require('axios')

const getCountriesById = async (id, source) => {
    const country = source === 'api' ?
    await axios.get(`https://restcountries.com/v3/alpha/`)
    : 'hola'
}
const foundCountry = async (name) => {
    await axios.get(`https://restcountries.com/v3/name/${name}`)
    
}

const foundCountries = async () => {
    const all = await axios.get('https://restcountries.com/v3/all');

}

module.exports = {
    getCountriesById,
    foundCountry, 
    foundCountries
}