"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('matchday', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
    logging: false,
});
exports.default = sequelize;
