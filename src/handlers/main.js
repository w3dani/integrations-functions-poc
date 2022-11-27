const { initContainer } = require('../components/container');

module.exports.handler = async (event) => {
  const {
    cradle: {
      logger,
      mainController,
    },
  } = await initContainer();

  logger.info('function invoked', event);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v3.0! Your function executed successfully!',
        input: event,
        data: mainController.getRandomValue(),
      },
      null,
      2,
    ),
  };
};
