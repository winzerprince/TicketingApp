const express = require('express');
const app = express();
const customers = require("./routes/customers");
const Joi = require('joi');
const home = require("./routes/home");
const movies = require("./routes/movies");

app.use('/', home);
app.use('/movies', home);
app.use('/customers',customers);