import { DataTypes , Model } from 'sequelize';
import db from '../config/db';
import sequelize from '../config/db';


interface UserAttributes {
    id_user: string;
    name: string;
    email: string;
    password: string;
    role: string;
    create_at: Date;
    
}

interface UserInstance extends Model<UserAttributes>, UserAttributes {}


const User = sequelize.define<UserInstance>('User', {

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
        type: DataTypes.ENUM('1', '2', '3')
   
    },
    create_at: {
        type: DataTypes.DATE,
   
    },
    
}, {
    createdAt: false,
    updatedAt: false,
    modelName: 'User',
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



export default User; 