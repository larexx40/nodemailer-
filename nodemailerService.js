require('dotenv').config();
const hbs = require('nodemailer-express-handlebars')
const  nodemailer = require('nodemailer');
const path = require('path')
/**
 * NB. you must allow receive message from 
 * less secure app in your gmail
 * (both sender and receeiver gmail)
*/
//initialize nodemailer transporter
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GOOGLE_USER,
        pass: process.env.GOOGLE_PASS
    }
})


const handlebarOption = {
    viewEngine: {
        partialsDir: path.resolve('./views/'),
        defaultLayout: false,
    }, 
    viewPath: path.resolve('./views/'),
}

transporter.use('compile', hbs(handlebarOption))

let mailOptions ={
    from: '"Lanre" <lanretunji47@gmail.com>',
    to: 'o.o.rokeeb@gmail.com',
    template: 'email',//email.handlebars
    context:{
        name: 'Lanre', //name on handlebar
        company: 'ZinoBank' //company 
    },
    subject: 'Node.js Test attachment',
    //add atachment to the template
    attachments: [{filename: 'pic2.PNG' , path: './attachments/pic2.PNG',}]
}

transporter.sendMail(mailOptions, (err, info)=>{
    if(err){
        throw err
    }else{
        console.log('message sent sucessfully');
    }
})