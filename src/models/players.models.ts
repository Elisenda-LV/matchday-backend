import { DataTypes } from 'sequelize';
import db from '../config/db';

const Player = db.define('Player', {

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
    createdAt: false,
    updatedAt: false,
})

export default Player;