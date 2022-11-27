class SampleController {
  constructor({ logger }) {
    this.logger = logger;
  }

  mergeName = (firstName, lastName) => {
    this.logger.info('merging name', { firstName, lastName });
    return `${firstName} ${lastName}`;
  };
}

module.exports = SampleController;
