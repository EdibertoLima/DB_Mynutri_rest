const express = require('express');

const UserController = require("./Controllers/UserController");
const UserInfoControllerm = require("./Controllers/InforUserController");
const LoginUserController = require("./Controllers/LoginUserController")

const routes = express.Router();

routes.post('/cadastro',UserController.addUser,UserInfoControllerm.addUserinfo);

routes.post('/login',LoginUserController.login);
//routes.post('/cadastromongo',UserControllerm.addUser);

//routes.post('/findmongo',UserControllerm.allUser);


module.exports=routes;