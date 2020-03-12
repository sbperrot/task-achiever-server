import { Model, DataTypes } from "sequelize";
import { sequelize } from '../lib/database/sequelize';

export class User extends Model {
    get id(): number { return this.id; };
    get firstName() : string { return this.firstName ; };
    get lastName() : string { return this.lastName; };
};

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [8, Infinity]
            }
        }
    },
    {
        sequelize,
        modelName: 'User',
        timestamps: true,
        paranoid: true,
        underscored: true
    }
);
