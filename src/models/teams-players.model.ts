import { DataTypes, Model } from 'sequelize';
import db from '../config/db';

import Team from './teams.model';

class Player extends Model {}
Player.init({

    id_player: {
        type: DataTypes.MEDIUMINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nif: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
    },
    surname: {
        type: DataTypes.STRING,
    },
    born_date: {
        type: DataTypes.DATE,
    },
    status: {
        type: DataTypes.TINYINT,
    },
    create_at: {
        type: DataTypes.DATE
    }


}, {
    sequelize: db, 
    modelName: 'Player',
    createdAt: false,
    updatedAt: false,
})

class TeamPlayer extends Model {}
TeamPlayer.init({

    player_id: {
        type: DataTypes.MEDIUMINT,
        primaryKey: true,
    },
    team_id: {
        type: DataTypes.MEDIUMINT,
        primaryKey: true,

    },
    create_at: {
        type: DataTypes.DATE,

    }
}, {
    sequelize: db, 
    modelName: 'TeamPlayer',
    createdAt: false,
    updatedAt: false,
})

//Define associations between Teams and Players:

Player.belongsToMany(Team, { through: TeamPlayer, foreignKey: 'player_id' });
Team.belongsToMany(Player, { through: TeamPlayer, foreignKey: 'team_id' });

export { Team, Player, TeamPlayer } 


