import { DataTypes } from 'sequelize';
import db from '../config/db';


const Team = db.define('Team', {

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
    createdAt: false,
    updatedAt: false,

})


const Player = db.define ('Player', {

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


const TeamPlayer = db.define('Team_player', {

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



//Define associations between Teams and Players:

Player.belongsToMany(Team, { through: TeamPlayer, foreignKey: 'player_id' });
Team.belongsToMany(Player, { through: TeamPlayer, foreignKey: 'team_id' });


export default Team; Player; TeamPlayer;


