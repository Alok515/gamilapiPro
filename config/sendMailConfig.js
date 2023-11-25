const nodeMailer = require('nodemailer');
const dotenv = require('dotenv').config();
const getAccessToken = require('./acessToken');

const { C_ID, C_HIDE, REFRESH_TOKEN } = process.env;

const sendMailConfig = async(toMail, data)=>{
    try {
        
    const accessToken = await getAccessToken();
    const transport = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAUTH2',
            user: "mr.alok.mailbox@gmail.com",
            clientId: C_ID,
            clientSecret: C_HIDE,
            refreshToken: REFRESH_TOKEN,
            accessToken: accessToken
        }
    });

    const mailOptions = {
        from: 'Alok',
        to: toMail || 'www.mr.alok@gmail.com',
        subject:data.subject || 'Hello from Node',
        text:data.text||"Hello from Node and nodemailer",
        html:data.html||'<h1>Hello from gmail email using api</h1>'
    }
    const result = await transport.sendMail(mailOptions);
    return result;
    } catch (error) {
        console.error(error.message);
        return error;
    }
}

module.exports = sendMailConfig;