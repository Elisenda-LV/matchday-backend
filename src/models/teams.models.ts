import { DataTypes } from 'sequelize';
import db from '../config/db';


const Team = db.define('Team', {

    id_team: {
        type: DataTypes.MEDIUMINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    sport_id: {
        type: DataTypes.MEDIUMINT,
        allowNull: false,
    },
    team_name: {
        type: DataTypes.STRING,
    },
    gender: {
        type: DataTypes.STRING,

    },
    category: {
        type: DataTypes.STRING,

    },
    location: {
        type: DataTypes.STRING,

    },
    description: {
        type: DataTypes.STRING,

    },
    create_at: {
        type: DataTypes.STRING,

    }


}, {
    createdAt: false,
    updatedAt: false,

})

export default Team;