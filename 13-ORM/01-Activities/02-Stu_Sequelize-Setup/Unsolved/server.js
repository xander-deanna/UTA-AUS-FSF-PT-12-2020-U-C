require('dotenv').config();
const express = require('express');
console.log('process.evn.DB_HOST: ', process.env.DB_HOST)
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
