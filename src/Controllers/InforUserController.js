const Userinfo = require("../models/InforUser")

module.exports = {
    async addUserinfo(req, res) {
        await Userinfo.sync({ force: true });
        const body = req.body;

        try {
            const user = await Userinfo.create({ user_id: body.id, nascimento: body.nascimento, telefone: body.telefone,peso:body.peso,altura:body.altura });
            //await User.sync({ force: true });
            return res.json({ "error": false, "mensage": "usuario criado" });
        } catch (error) {
            res.json(error);
        }
    }

}