import { DataTypes } from 'sequelize';
import db from '../config/db';

const RecoveryToken = db.define('RecoveryToken', {

    token: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      expiresAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
});


export default RecoveryToken;