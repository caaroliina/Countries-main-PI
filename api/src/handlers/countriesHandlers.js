const { getCountriesById, foundCountry, foundCountries } = require('../controllers/countriesControllers.js')

const getCountryById = async (req,res) => {
    const {idPais} = req.params;
    let source = isNan(idPais) ? 'bdd' : 'api';

    try {
        const foundCountry = await getCountriesById(idPais, source)
        return res.status(200).json(foundCountry);
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}

const getCountries = (req, res) => {
    const { name } = req.query;

    try {
        if (name !== undefined){
            const country = foundCountry(name)
            return res.status(200).json(country)
        }
        const allCountries = foundCountries();
        return res.status(200).json(allCountries);

    } catch (error) {
        return res.json({error: error.message})
    }
}

module.exports = {
    getCountries,
    getCountryById
}