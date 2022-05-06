require('dotenv').config();
const hbs = require('nodemailer-express-handlebars')
const  nodemailer = require('nodemailer');
const path = require('path')

//initialize nodemailer transporter
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'lanretunji47@gmail.com',
        pass: 'giveaway2020'
    }
})

let mailOptions ={
    from: 'lanretunji47@gmail.com',
    to: 'o.o.rokeeb@gmail.com',
    subject: 'Node.js Test Mail',
    text: 'welcome to nodemailer module, test how to send mail to user via nodemailer.'
}

transporter.sendMail(mailOptions, (err, info)=>{
    if(err){
        throw err
    }else{
        console.log('message sent sucessfully');
    }
})

/*
handlebars template
const handlebarOption = {
    viewEngine: {
        partialsDir: path.resolve('./views/'),
        defaultLayout: false,
    }, 
    viewPath: path.resolve('./views/'),
}
*/
