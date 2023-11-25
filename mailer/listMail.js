const configAxios = require('../config/axiosConfig');
const accessToken = require('../config/acessToken');
const axios = require('axios');

const { Gmail_url, Gmail } = process.env;

const listMail = async (req, res) => {
    try {
        const { token } = await accessToken();
        const url = `${Gmail_url}${Gmail}/threads?maxResults=10`;
        const config = configAxios('get', url, token);
        const results = await axios(config);
        return res.json(results.data);
    } catch (error) {
        return res.json({ error: error });
    }
}

module.exports = listMail;