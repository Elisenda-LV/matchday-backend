import { DataTypes } from 'sequelize';
import db from '../config/db';

const Sport = db.define('Sport', {

    id_sport: {
        type: DataTypes.MEDIUMINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
    },
    create_at: {
        type: DataTypes.DATE
    }


}, {
    createdAt: false,
    updatedAt: false,

})

export default Sport;