import { Sequelize }  from "sequelize";

const sequelize = new Sequelize('matchday', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
    logging: false,

});

export default sequelize;