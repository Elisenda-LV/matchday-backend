"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
const League = db_1.default.define('League', {
    id_league: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    sport_id: {
        type: sequelize_1.DataTypes.MEDIUMINT,
        allowNull: false,
    },
    league_name: {
        type: sequelize_1.DataTypes.STRING,
    },
    gender: {
        type: sequelize_1.DataTypes.STRING,
    },
    category: {
        type: sequelize_1.DataTypes.STRING,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
    },
    location: {
        type: sequelize_1.DataTypes.STRING,
    },
    create_at: {
        type: sequelize_1.DataTypes.DATE,
    },
    updated_at: {
        type: sequelize_1.DataTypes.DATE,
    },
}, {
    createdAt: false,
    updatedAt: false,
});
exports.default = League;
