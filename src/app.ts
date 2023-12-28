import "dotenv/config";
import "express-async-errors";
import express from "express";
import restaurantsRouter from "./routes/restaurants";
import errorHandlerMiddleware from "./middleware/error-handler-meddileware";
import reviewsRouter from "./routes/reviews";

const server = express();

const PORT = process.env.PORT || 8000;

server.use(express.json());
server.use("/api/restaurants", restaurantsRouter);
server.use("/api/reviews", reviewsRouter);
server.use(errorHandlerMiddleware);

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
