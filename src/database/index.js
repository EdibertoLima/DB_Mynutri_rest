const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const User = require("../models/User");
const Userinfo = require("../models/InforUser");

const conection = new Sequelize(dbConfig);



User.init(conection);
Userinfo.init(conection);
Userinfo.associate(conection.models);
//module.exports= conection;