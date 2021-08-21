const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const myEmail = process.env.EMAIL;
const myPassword = process.env.PASSWORD;

router.post('/', async (req, res) => {
	const output = `
          <p>You have a new contact request</p>
          <h3>Contact Details</h3>
          <ul>  
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
          </ul>
          <h3>Message</h3>
          <p>${req.body.message}</p>
        `;

	let transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: myEmail,
			pass: myPassword,
		},
		tls: {
			rejectUnauthorized: false,
		},
	});

	let mailOptions = {
		from: myEmail,
		to: 'kudziemadzongwe6@gmail.com',
		subject: 'Contact request',
		html: output,
	};

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			res.json('Thank you, your email has been sent');
			console.log('Email sent: ' + info.response);
		}
	});
});

router.post('/newsletter', async (req, res) => {
	const output = `
          <p>You have a new newsletter subscription</p>
          <h3>Newsletter Subscription</h3>
          <ul>  
            <li>Email: ${req.body.email}</li>
          </ul>
        `;

	let transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: myEmail,
			pass: myPassword,
		},
		tls: {
			rejectUnauthorized: false,
		},
	});

	let mailOptions = {
		from: myEmail,
		to: 'kudziemadzongwe6@gmail.com',
		subject: 'Newsletter Subscription',
		html: output,
	};

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			res.json('Thank you, your email has been sent');
			console.log('Email sent: ' + info.response);
		}
	});
});

module.exports = router;
