const Seq = require('sequelize');

const sequelize = require('../util/database')

const data = sequelize.define('userdata',{
    id: {
        type: Seq.INTEGER,
        allowNull: false,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Seq.CHAR,
        allowNull: false
    },
    email: {
        type: Seq.CHAR,
        allowNull: false,
        unique: true
    },
    phone: {
        type: Seq.CHAR,
        allowNull: false,
        unique: true
    },
    date: {
        type: Seq.DATE,
        allowNull: false
    },
    time: {
        type: Seq.TIME,
        allowNull: false
    }
})

module.exports = data;