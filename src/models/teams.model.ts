import { Model, DataTypes } from 'sequelize';
import db from '../config/db';


class Team extends Model {} 

Team.init({
    
    id_team: {
        type: DataTypes.MEDIUMINT,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'User', //users.model
            key: 'id_user',     
        },
    },
    sport_id: {
        type: DataTypes.MEDIUMINT,
        references: {
            model: 'Sport', //sports.model
            key: 'id_sport',  
        },
    },
    team_name: {
        type: DataTypes.STRING,
        allowNull: false,
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
        type: DataTypes.DATE,
    },
    updated_at: {
        type: DataTypes.DATE,
    },

},{
    sequelize: db,
    modelName: 'Team',
    createdAt: false,
    updatedAt: false,

});


export default Team;