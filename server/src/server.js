require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const config = require("./config");
const db = require("./db");
const membersRouter = require("./entities/member/member.router");
const eventsRouter = require("./entities/event/event.router");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/members", membersRouter);
app.use("/events", eventsRouter);

const startServer = async () => {
  try {
    await db.connect();
    app.listen(config.port, () => {
      console.log(`Events API listening on port ${config.port}`);
    });
  } catch (e) {
    console.log(e);
  }
};

startServer();
