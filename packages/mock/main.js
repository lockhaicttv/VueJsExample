const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(require("./db"));
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Add custom routes before JSON Server router
server.get("/echo", (req, res) => {
  res.jsonp(req.query);
});
const checkEndPoint = (url) => {
  let split = url.split("/");
  if (
    split[1] === "matches" ||
    split[1] === "player" ||
    split[1] === "news" ||
    split[1] === "newspaper" ||
    split[1] === "standing" ||
    split[1] === "details"
  ) {
    return true;
  } else {
    return false;
  }
};
// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  const url = req.originalUrl;
  if (req.method === "POST") {
    res.json({ message: "Server does not supported methods POST" });
  } else if (req.method === "PUT") {
    res.json({ message: "Server does not supported methods PUT" });
  } else if (req.method === "PATCH") {
    res.json({ message: "Server does not supported methods PATCH" });
  } else if (checkEndPoint(url) !== true) {
    res.json({ message: "Endpoint not founded" });
  }
  // Continue to JSON Server router
  next();
});

// Use default router
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});
