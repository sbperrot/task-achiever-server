const winston = require('winston');

const {
  combine, colorize, timestamp, printf,
} = winston.format;

let logger;
const logFormat = printf(info => `${info.timestamp} [${info.level}] ${info.message}`);
logger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.Console({
      format: combine(colorize(), timestamp(), logFormat),
    }),
  ],
});

logger.add(new winston.transports.Console({
  format: winston.format.simple(),
}));

module.exports = logger;
