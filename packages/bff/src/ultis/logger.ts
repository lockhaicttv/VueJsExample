const pino = require("pino");
const logger = pino({
  prettyPrint: { colorize: true },
  levelFirst: true,
});
export { logger };
