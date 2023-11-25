const configAxios = require('../config/axiosConfig');
const accessToken = require('../config/acessToken');
const axios = require('axios');

const { Gmail_url, Gmail } = process.env;

const readMail = async (req, res) => {
    try {
        const { token } = await accessToken();
        const url = `${Gmail_url}${Gmail}/messages/${req.params.id}`;
        const config = configAxios('DELETE', url, token);
        const results = await axios(config);
        return res.json({
            "Message": "Message deleted",
            "MessagesId": req.params.id
        });
    } catch (error) {
        return res.json({ error: error });
    }
}

module.exports = readMail;