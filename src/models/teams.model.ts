import { Model, DataTypes } from 'sequelize';
import db from '../config/db';


class Team extends Model {} 

Team.init({
    
    id_team: {
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
    team_name: {
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
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
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
    sequelize: db,
    modelName: 'Team',
    createdAt: false,
    updatedAt: false,

});


export default Team;