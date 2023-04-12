//this file contains logger functions
const winston = require('winston');
const { format } = winston;
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
    }
);

const logger = winston.createLogger({
    level: 'info',
    format: combine(
        label({ label: 'right here!' }),
        timestamp(),
        myFormat
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' })
    ]
});

module.exports = logger;