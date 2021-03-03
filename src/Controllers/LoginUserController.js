const { Model, DataTypes } = require("sequelize");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require("../models/User")

module.exports = {
    async login(req, res) {
        try {
            const body = req.body;
            var userCreate = await User.findAll({ where: { email: body.email } });
            //return res.json(userCreate[0].password);
            if (userCreate.length > 0) {
                if (await bcrypt.compareSync(req.body.senha, userCreate[0].password)) {
                    const token = jwt.sign({
                        Id: userCreate.userId,
                        email: userCreate.email
                    },
                        //process.env.JWT_KEY,
                        "keytestes",
                        {
                            expiresIn: "1h"
                        });
                    return res.status(200).send({
                        message: 'Autenticado com sucesso',
                        token: token
                    });
                }
                //caso senha errada
                return res.status(401).json({ message: 'Falha na autenticação' });

            } else {
                return res.status(401).json({ message: 'Falha na autenticação' });

            }
        } catch (error) {
            return res.status(400).json({ message: 'Falha na autenticação' });
        }
    }
}