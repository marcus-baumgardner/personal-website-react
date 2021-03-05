const nodemailer = require('nodemailer');
const creds = require ('./config/config.js');
const express = require('express');
const creds = require('./config/config.js');
const router = express.Router();

var transport = {
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: creds.USER,
        pass: creds.PASS
    }
}

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take messages');
    }
});

router.post('/send', (req, reds, next) => {

    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const content = `name: ${name} \n email: ${email} \n message: ${message}`

    const mail = {
        from: name,
        to: creds.USER,
        subject: `New Message from Contact Form (${name})`,
        text: content
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                status: 'fail'
            });
        } else {
            res.json({
                status: 'success'
            });
        }
    })
});

module.exports = router;



