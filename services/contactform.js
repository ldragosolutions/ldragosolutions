let nodemailer = require('nodemailer');

class contactform {
    contact = async(name, companyName, date, mailId, phnNo, msg) => {

        return new Promise((resolve, reject) => {

            console.log(process.env.mail, process.env.mailPassword)
            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.mail,
                    pass: process.env.mailPassword
                }
            });

            let mailOptions = {
                from: mailId,
                to: "tejasimha222@gmail.com",
                subject: companyName,
                text: 'Hi, I am ' + name + ' from ' + companyName + ' we can Scheduled our meeting on: ' + date + '. further info- Phone Number: ' + phnNo + ' content:' + msg
            };

            transporter.sendMail(mailOptions, function(error, info) {
                if (error) {
                    console.log(error);
                    resultMsg = {
                        message: "ERROR- We are sorry your response not Received. Please Try Again",
                        color: "red"
                    }
                    return reject({ message: "Error while sending mail", error: "FAILURE" });
                } else {
                    resultMsg = {
                        message: "SUCCESS- Your response received successfully. Our Support team will reach you soon",
                        color: "green"
                    }
                    return resolve({ message: "Mail send Successfully", data: "SUCCESS" });
                }
            });
        });
    }
}
let contact = new contactform();

module.exports = contact;