import { Model, DataTypes } from 'sequelize';
import db from '../config/db';
import  League  from './leagues.models';
import  Team  from './teams.model';

export class LeagueTeams extends Model {
    public leagueId!: number;
    public teamId!: number;
  }

LeagueTeams.init({
    league_id: {
        type: DataTypes.MEDIUMINT,
        primaryKey: true,
        references: {
            model: League, //leagues.model
            key: 'id_league',
        },
    },
    team_id: {
        type: DataTypes.MEDIUMINT,
        primaryKey: true,
        references: {
            model: Team, //teams.model
            key: 'id_team',
        },
    },
    create_at: {
        type: DataTypes.DATE,
    },
    updated_at: {
        type: DataTypes.DATE,
    },

},{
    tableName: 'LeagueTeams',
    sequelize: db,
    createdAt: false,
    updatedAt: false,
});

League.belongsToMany(Team, { through: LeagueTeams, foreignKey: 'league_id' });
Team.belongsToMany(League, { through: LeagueTeams, foreignKey: 'team_id' });


export default LeagueTeams;
