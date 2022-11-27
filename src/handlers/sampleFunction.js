const { initContainer } = require('../components/container');

module.exports.handler = async (event) => {
  const {
    cradle: {
      logger,
      sampleController,
    },
  } = await initContainer();

  logger.info('function invoked', event);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v3.0! Your function executed successfully!',
        input: event,
        data: sampleController.mergeName(event.first_name, event.last_name),
      },
      null,
      2,
    ),
  };
};
