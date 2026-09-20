const express = require('express');
const app = express();
const urlRouter = require('./routes/url.route')
const getRouter = require('./routes/get.route')
const healthRouter = require('./routes/health.route')
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/api', urlRouter);
app.use('/', getRouter); 
app.use('/health', healthRouter); 

module.exports = app;