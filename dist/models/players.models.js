"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
const Player = db_1.default.define('Player', {
    id_player: {
        type: sequelize_1.DataTypes.MEDIUMINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nif: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
    },
    surname: {
        type: sequelize_1.DataTypes.STRING,
    },
    born_date: {
        type: sequelize_1.DataTypes.DATE,
    },
    status: {
        type: sequelize_1.DataTypes.TINYINT,
    },
    create_at: {
        type: sequelize_1.DataTypes.DATE
    }
}, {
    createdAt: false,
    updatedAt: false,
});
exports.default = Player;
