const {DataTypes} = require("sequelize");
const sequelize = require("../config/config");

const Cliente = sequelize.define("cliente", {
    nome : {
        type :DataTypes.STRING,
        allowNull : false,
    },
    email : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    senha : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    cpf : {
        type : DataTypes.STRING,
        allowNull  : false
    },
    idade : {
        type : DataTypes.INTEGER,
        allowNull : false
    }
       

})

module.exports = Cliente;