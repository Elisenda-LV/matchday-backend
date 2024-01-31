import { DataTypes } from 'sequelize';
import db from '../config/db';

const TeamPlayer = db.define('Team_Player', {

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
    createdAt: false,
    updatedAt: false,
})

export default TeamPlayer;