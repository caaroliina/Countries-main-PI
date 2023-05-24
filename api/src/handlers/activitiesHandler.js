const getActivities = (req, res) => {
    try {
        res.send("estoy en get activity")
    } catch (error) {
        res.json({error: error.message})
    }
};

const postActivities = (req, res) => {
    try {
        const { name, difficulty, duration, season } = req.body;
        res.send(`estoy en post activity con los datos: ${name}, ${difficulty}, ${duration}, ${season} `)
    } catch (error) {
        res.json({error: error.message})
    }
};

module.exports = {
    getActivities,
    postActivities
}