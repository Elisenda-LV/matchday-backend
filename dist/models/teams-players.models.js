"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
const TeamPlayer = db_1.default.define('Team_Player', {
    player_id: {
        type: sequelize_1.DataTypes.MEDIUMINT,
        primaryKey: true,
    },
    team_id: {
        type: sequelize_1.DataTypes.MEDIUMINT,
        primaryKey: true,
    },
    create_at: {
        type: sequelize_1.DataTypes.DATE,
    }
}, {
    createdAt: false,
    updatedAt: false,
});
exports.default = TeamPlayer;
