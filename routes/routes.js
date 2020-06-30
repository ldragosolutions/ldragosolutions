const express = require('express');
const router = express.Router();
global.express = express;
global.router = router;

const contact = require('../controllers/contactform');

let contactObj = new contact();

router.post('/contactform', contactObj.contact);

module.exports = router;