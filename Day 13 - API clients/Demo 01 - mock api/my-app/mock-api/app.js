const express = require('express');
const apiMocker = require('connect-api-mocker');
const cors = require('cors');
const port = 3001;

const app = express();

app.options("*", cors({ origin: 'http://localhost:3000', optionsSuccessStatus: 200 }));
app.use(cors({ origin: "http://localhost:3000", optionsSuccessStatus: 200 }));

app.use('/api', apiMocker('mock-api'));
app.listen(port);