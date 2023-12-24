import express from "express";

const server = express();

const PORT = 8000;

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
