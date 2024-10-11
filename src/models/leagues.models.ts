import { DataTypes } from 'sequelize';
import db from '../config/db';
import Team from './teams.model';




const League = db.define('League', {

    id_league: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
    },
    league_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,

    },
    sport: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    create_at: {
        type: DataTypes.DATE,

    },
    updated_at: {
        type: DataTypes.DATE,

    },


},{
    createdAt: false,
    updatedAt: false,
})

League.belongsToMany(Team, { through: 'LeagueTeams' });

export default League;