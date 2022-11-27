const pino = require('pino');

class Logger {
  constructor({ config }) {
    const { serviceName } = config;
    this.pinoLogger = this.#initLogger({
      name: serviceName,
    });
  }

  #initLogger = ({ name }) => pino({
    base: {
      name,
    },
    timestamp: pino.stdTimeFunctions.isoTime,
    formatters: {
      level: (label) => ({ level: label }),
    },
  });

  info = (message, data) => this.pinoLogger.info({ msg: message, data });
}

module.exports = Logger;
