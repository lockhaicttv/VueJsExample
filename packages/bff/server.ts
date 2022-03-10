import express from "express";
const app = express();
import bodyParser from "body-parser";
const PORT = process.env.PORT || 4000;
import cors from "cors";
import route from "./src/route/index";
app.use(
  cors({
    origin: "http://localhost:8080",
  }),
);

app.use(bodyParser.json({ limit: "50mb" }));

app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: false,
  }),
);

app.use("/", route);
app.listen(PORT, () => {
  console.log("SERVER IS RUNNING IN PORT: ", PORT);
});
export default app;
