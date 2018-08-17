import Logger from '../logger';

export const handler = (event, context, cb) => {
  const logger = new Logger(context.awsRequestId);
  const response = {
    statusCode: 200,
    body: "Hello World"
  };
  console.log(event);
  logger.info({ request: 'GET', result: 'Hello World' });

};
