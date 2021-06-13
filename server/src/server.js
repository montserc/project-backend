const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const config = require('./config');
const db = require('./db');
const Member = require('./entities/member/member.model')

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', async (req, res) => {
  res.status(200).json({ hello: "world" });
});

const startServer = async () => {
  try {
    await db.connect();
    app.listen(config.port, () => {
      console.log(`Event API listening on port ${config.port}`);
    });  
  } catch(e) {
    console.log(e);
  }
};

startServer();