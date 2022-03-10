import express, { Application, Response, Request, NextFunction } from "express";
import news from "./news";
import players from "./players";
import details from "./matchDetails";
import matches from "./matches";
import standing from "./standing";
import expressPinoLogger from "express-pino-logger";
import { logger } from "@/ultis/logger";

const app: Application = express();
app.use(expressPinoLogger({ logger: logger }));
const checkEndPoint = (url: string): boolean => {
  const split = url.split("/");
  if (
    split[1] === "matches" ||
    split[1] === "players" ||
    split[1] === "news" ||
    split[1] === "standing" ||
    split[1] === "details"
  ) {
    return true;
  } else {
    return false;
  }
};
app.use((req: Request, res: Response, next: NextFunction) => {
  const url = req.originalUrl;
  req.log.info("Request");
  //Middleware
  if (req.method === "POST" || req.method === "PATCH" || req.method === "PUT") {
    res.json({ rc: 4, data: [], rd: "Server does not supported this method" });
  } else if (checkEndPoint(url) === false) {
    res.json({ rc: 4, data: [], rd: "Endpoint not founded" });
  } else {
    next();
  }
});
app.use("/news", news);
app.use("/players", players);
app.use("/matches", matches);
app.use("/standing", standing);
app.use("/details", details);
export default app;
