import winston from 'winston';

const RedisTransport = require('winston-redis');

export default class LoggerLibrary {
  public logger

  constructor() {
    this.logger = winston.createLogger({
      format: winston.format.json(),
      transports: [
        new RedisTransport({
          host: process.env.REDIS_HOST,
          port: process.env.REDIS_PORT,
          auth: process.env.REDIS_AUTH,
        }),
      ],
    });
  }

  writeLog(content:any) {
    this.logger.log(content);
  }
}
