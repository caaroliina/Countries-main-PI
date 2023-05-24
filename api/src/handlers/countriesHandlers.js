const getCountryById = (req,res) => {
    try {
        const {idPais} = req.params;
        res.send(`${idPais}`)
    } catch (error) {
        res.json({error: error.message})
    }
}

const getCountries = (req, res) => {
    try {
        const { name } = req.query;
        if (name !== undefined){
            res.send(`${name}`)
        }
        res.send(`hola`)
    } catch (error) {
        res.json({error: error.message})
    }
}

module.exports = {
    getCountries,
    getCountryById
}