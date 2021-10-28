const database = require("./../database");
const { Sequelize } = require("sequelize");


const Campeao = database.define("campeoes", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    idade: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    genero: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    dano: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    arma: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    imagem: {
        type: Sequelize.STRING,
        allowNull: false,
    },
},
{
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
});

module.exports = Campeao;