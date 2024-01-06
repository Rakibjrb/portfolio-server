require("dotenv").config();
const http = require("http");
const app = require("./src/app");
const connectDB = require("./src/db/db");
const server = http.createServer(app);
const port = process.env.PORT || 5000;

const run = async () => {
  await connectDB();
  server.listen(port, () => {
    console.log(`[+] server running on http://localhost:${port}`);
  });
};

run();
