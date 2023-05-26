const { getCountriesById, foundCountry, searchCountries } = require('../controllers/countriesControllers.js')

const getCountryById = async (req,res) => {
    const {idPais} = req.params;
    let source = idPais.length == 3 ? 'api' : 'bdd';

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
        const result = name !== undefined ? foundCountry(name) : searchCountries(); 
        return res.status(200).json(result);

    } catch (error) {
        return res.json({error: error.message})
    }
}

module.exports = {
    getCountries,
    getCountryById
}