import "dotenv/config";
import express from "express";
import restaurantsRouter from "./routes/restaurants";

const server = express();

const PORT = process.env.PORT || 8000;

server.use(express.json());
server.use("/api/restaurants", restaurantsRouter);

async function start() {
  try {
    server.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  } catch (e) {
    console.log("--- start server error", e);
  }
}

start();
