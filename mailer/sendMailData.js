const sendMailConfig = require('../config/sendMailConfig');

const sendMailData  = async (req, res) => {
    try {
        const mail = req.params.mail;
        const data = {
            subject: req.query.sub || "This is mail from Nodejs",
            text: "Hello from Node",
            html: req.query.msg || "<h1>Html Data from Node</h1>"
        }
        const result = await sendMailConfig(mail,data);
        res.json({
            msg: result
        });
    } catch (error) {
        console.error(error.message);
    }
}

module.exports = sendMailData;