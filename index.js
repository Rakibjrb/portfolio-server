require("dotenv").config();
const http = require("http");
const app = require("./src/app");
const server = http.createServer(app);
const port = process.env.PORT || 5000;

const run = () => {
  server.listen(port, () => {
    console.log(`[+] server running on http://localhost:${port}`);
  });
};

run();
