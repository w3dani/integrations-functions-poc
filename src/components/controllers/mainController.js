class MainController {
  constructor({ logger }) {
    this.logger = logger;
  }

  getRandomValue = () => {
    this.logger.info('get random value');
    return `random value = ${Math.random() * 100}`;
  };
}

module.exports = MainController;
