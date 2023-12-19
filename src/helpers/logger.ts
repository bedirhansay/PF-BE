import winston from "winston";
import "winston-mongodb";

const { createLogger, format, transports } = winston;
const { combine, timestamp, prettyPrint } = format;

const { MONGO_URL } = process.env;

export const logger = createLogger({
  level: "debug",
  format: combine(
    timestamp({
      format: "MMM-DD-YYYY",
    }),
    prettyPrint()
  ),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: "logs.log",
    }),
    new transports.MongoDB({
      level: "error",
      //@ts-ignore
      db: MONGO_URL, // Değişiklik burada
      options: {
        useUnifiedTopology: true,
      },
      collection: "server_logs",
    }),
  ],
});
