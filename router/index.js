const express = require('express');
const v1Route = require('./v1/index');
const route = express.Router();
const getProfile = require('../mailer/getProfile');

route.use('/api', v1Route);

route.get('/', async (req, res) => {
    try {
        const profile = await getProfile();
        const msg = {
            Profile: profile,
            Msg: "To Use This Api",
            list: {
                path:"/api/v1/list",
                msg: "It gives you the list of mail in the Threads"
            },
            read: {
                path: "/api/v1/read/:id",
                msg: "Use the id to get and read msg",
                id: 'id of the mail get it from list'
            },
            delete: {
                path: "/api/v1/del/:id",
                msg: "Delete the message using the id",
                id: 'id of the mail get it from list'
            },
            send: {
                path: "/api/v1/send/:mail?sub=subject&msg=message",
                msg: 'Send a message to the Mail address',
                mail:"send mail address" 
            }
        }
    
        return res.json(msg);
    } catch (error) {
        console.log(error);
        return res.json(error);
    }
});

module.exports = route;