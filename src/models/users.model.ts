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
    role: {
        type: DataTypes.ENUM('admin', 'user', 'guest')
   
    },
    create_at: {
        type: DataTypes.DATE,
   
    },
    
}, {
    createdAt: false,
    updatedAt: false,
})


const Role = db.define('Role', {
    id_role: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    role_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
    },
});


//Define associations between User and Role:

User.belongsTo(Role, { foreignKey: 'role', as: 'userRole' });



export default User