const { Country } = require('../db.js');
const axios = require('axios')

const getCountriesById = async (id, source) => {
    const country = await (axios.get(`https://rest-countries.up.railway.app/v2/alpha/${id}`)).data;
    
    await country.map((country) => {
        let pais = {
            id: country.alpha3Code,
            name: country.name,
            flagImg: country.flags[1],
            continent: country.continents[0],
            capital: country.capital ? country.capital : 'Capital not found',
            subregion: country.subregion,
            population: country.population,
        }
        return Country.findOrCreate({ pais })
    })
}

const foundCountry = async (name) => {
    const countryWithName = await (axios.get(`https://rest-countries.up.railway.app/v2/name/${name}`)).data;
    
    return Country.findOrCreate({ where: {name: countryWithName.name}})

}

const searchCountries = async () => {
    const all = await (axios.get('https://rest-countries.up.railway.app/v2/all')).data;
    

}

module.exports = {
    getCountriesById,
    foundCountry, 
    searchCountries
}