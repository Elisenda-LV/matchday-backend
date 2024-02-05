import { DataTypes } from 'sequelize';
import db from '../config/db';


const User = db.define('User', {

    id_user : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rol: {
        type: DataTypes.ENUM('admin', 'user', 'guest')
   
    },
    create_at: {
        type: DataTypes.DATE,
   
    },
    
}, {
    createdAt: false,
    updatedAt: false,
})


const Role = db.define('Rol', {});

User.belongsToMany(Role, { through: Role });
Role.belongsToMany(User, { through: Role });


export default User