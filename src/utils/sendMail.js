const nodemailer = require("nodemailer")

const sendEmail = async (mailOptions) => {
    
    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: process.env.NODE_MAIL, // generated ethereal user
          pass: process.env.NODE_PASS, // generated ethereal password
        },
      });

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("Hata Çıktı Mail Gönderilemedi : ", error);
        }
        console.log("info : ",info);
        return true
    })
}

module.exports = sendEmail