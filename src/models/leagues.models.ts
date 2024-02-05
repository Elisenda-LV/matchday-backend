import { DataTypes } from 'sequelize';
import db from '../config/db';


const League = db.define('League', {

    id_league: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    sport_id: {
        type: DataTypes.MEDIUMINT,
        allowNull: false,
    },
    league_name: {
        type: DataTypes.STRING,

    },
    gender: {
        type: DataTypes.STRING,

    },
    category: {
        type: DataTypes.STRING,

    },
    description: {
        type: DataTypes.STRING,

    },
    location: {
        type: DataTypes.STRING,

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

export default League;