const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const router = require('./routes/routes');
const logger = require('./logger/logger.js');
const response = require('./responses/response');
const app = express();
const bodyParser = require('body-parser');

global.resultMsg = {
    message: "Our support team is ready to communicate with you",
    color: "black"
}
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/ldragotechs', router);

app.set('view engine', 'ejs');

global.response = response;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render("index");
});
app.get('/careers', (req, res) => {
    res.render("careers");
})
app.get('/contactform', (req, res) => {
    res.render("contactform", resultMsg);
});

app.listen(process.env.PORT || 3000, () => {
    wLogger.info(`Server Listening at port `);
})