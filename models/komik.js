import { Sequelize } from 'sequelize';
import db from '../config/config.js'; // Sesuaikan jalur jika file config ada di tempat lain

const { DataTypes } = Sequelize;

const Komik = db.define('komik', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true
});