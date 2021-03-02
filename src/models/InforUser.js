const { Model, DataTypes } = require("sequelize");

class InforUser extends Model {
    static init(sequelize) {
        super.init({
            user_id: {
                type: DataTypes.INTEGER, allowNull: false,
                references: {model: 'users',key:'id'},
                onUpdate:'CASCADE',
                onDelete:'CASCADE',
            },
            nascimento: { type: DataTypes.DATEONLY, allowNull: false },
            telefone: { type: DataTypes.STRING(20), allowNull: false },
            peso: { type: DataTypes.FLOAT(5), allowNull: false },
            altura: { type: DataTypes.FLOAT(5), defaultValue: true },
        }, {
            sequelize,
            modelName: 'InforUser',
            // don't forget to enable timestamaaps!
            timestamps: false,

        })
    }
    static associate(models){
        this.belongsTo(models.User,{foreignKey:'user_id', as:'infor'});
    }
}


module.exports = InforUser;