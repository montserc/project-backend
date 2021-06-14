const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const config = require('./config');
const db = require('./db');
const memberControllers = require('./entities/member/member.controllers');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/members', memberControllers.getMany);
app.post('/members', memberControllers.createOne);

const startServer = async () => {
  try {
    await db.connect();
    app.listen(config.port, () => {
      console.log(`Event API listening on port ${config.port}`);
    });  
  } catch (e) {
    console.log(e);
  }
};

startServer();