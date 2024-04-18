const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');


// Nodemailer configuration

// to send an email, i need to use nodemailer and 
//create a transporter, for security reasons 
//i wont introduce the accuarate details //

// Nodemailer configuration
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'houdynny@gmail.com',
        pass: 'Not Giving My Pass'  
    }
});




app.post('/send', (req, res) => {
    const { name, email, phone, dob, message, gender, country } = req.body;

    const mailOptions = {
        from: 'houdynny@gmail.com',
        to: 'victor_daniel1988@yahoo.com',
        subject: 'New Form Submission',
        html: `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <p><strong>Message:</strong> ${message}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Country:</strong> ${country}</p>
        `
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            res.send('error');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('success');
        }
    });
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});



