
const {createLogger, transports} = require('winston');

const logger = createLogger({
    level: 'info',
    transports: [
        new transports.Console(),
        new transports.File({filename: 'app.log', level: 'error', options: {flags: 'w'}}),
        new transports.File({filename: 'app.alllogs.log', options: {flags: 'w'}})
    ]

});

global.wLogger = logger

