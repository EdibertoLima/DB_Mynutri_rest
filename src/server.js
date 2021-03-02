const express = require('express');
const routes = require('./routes');
require("./database");

const app = express();

app.use(express.json());

app.use(routes);

//const app = require("./app");


app.listen(process.env.PORT || 3000);
//app.listen(3000); 