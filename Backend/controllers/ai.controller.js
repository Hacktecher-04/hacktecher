const ai = require('../services/ai.service.js');

const getResult = async (req, res) => {
    try {
        const { promt } = req.query;
        const result = await ai.generateResult(promt);
        res.send(result);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

module.exports = { getResult };



