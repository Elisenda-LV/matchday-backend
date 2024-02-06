"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
const Team = db_1.default.define('Team', {
    id_team: {
        type: sequelize_1.DataTypes.MEDIUMINT,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: 'User', //users.model
            key: 'id_user',
        },
    },
    sport_id: {
        type: sequelize_1.DataTypes.MEDIUMINT,
        references: {
            model: 'Sport', //sports.model
            key: 'id_sport',
        },
    },
    team_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    gender: {
        type: sequelize_1.DataTypes.STRING,
    },
    category: {
        type: sequelize_1.DataTypes.STRING,
    },
    location: {
        type: sequelize_1.DataTypes.STRING,
    },
    description: {
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
const TeamPlayer = db_1.default.define('Team_player', {
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
//Define associations between Teams and Players:
Player.belongsToMany(Team, { through: TeamPlayer, foreignKey: 'player_id' });
Team.belongsToMany(Player, { through: TeamPlayer, foreignKey: 'team_id' });
exports.default = Team;
Player;
TeamPlayer;
