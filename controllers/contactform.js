const express = require('express');
const router = express.Router();
const contactformServices = require('../services/contactform');
class contactformController {

    contact = async(req, res) => {
        console.log("contactform sucess")
        let name = req.body.name;
        let companyName = req.body.cName;
        let date = req.body.date;
        let mailId = req.body.mailId;
        let phnNo = req.body.phnNo;
        let msg = req.body.msg;

        global.res = res;

        try {
            let result = await contactformServices.contact(name, companyName, date, mailId, phnNo, msg);

            if (result) {
                console.log("contact form controller ")
                res.redirect('/contactform');
            }

        } catch (e) {
            res.redirect('/contactform');
        }
    }
}


module.exports = contactformController;