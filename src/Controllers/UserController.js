const User = require("../models/User")
const bcrypt = require('bcryptjs');

module.exports = {
    async addUser(req, res,next) {
        await User.sync({ force: true });
        var userCreate = 0
        const body = req.body;
        var hashpassword = bcrypt.hashSync(body.senha, 10);
        var userCreate = await User.findAll( {where:{ email: body.email }});
        if (userCreate == 0) {
            try {
                const user = await User.create({ name: body.name, email: body.email, password: hashpassword });

                //await User.sync({ force: true });
                req.body.id=user.id;
                next();
            } catch (error) {
                res.json(error);
            }
        }else{
            return res.status(400).json({"error":true,"mensage":"e-mail ja existente"});    
        }

        

    }
}