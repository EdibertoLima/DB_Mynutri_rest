const { Model, DataTypes } = require("sequelize");

class User extends Model {
    static init(sequelize) {
        super.init({
            name: {type:DataTypes.STRING,allowNull: false},
            email: {type: DataTypes.STRING(100),unique: true,allowNull: false},
            password: {type:DataTypes.STRING,allowNull: false},
            ativo : {type:DataTypes.BOOLEAN, defaultValue: true},
        }, {
            sequelize,
            modelName: 'User',
            // don't forget to enable timestamps!
            timestamps: false,

        })
    }
}


module.exports = User;