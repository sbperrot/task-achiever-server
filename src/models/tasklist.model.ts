import { Model, DataTypes } from "sequelize";
import { sequelize } from '../lib/database/sequelize';
import { User } from "./user.model";

export class TaskList extends Model {
    static user: any;

    get id(): number { return this.id; };
    get label(): number { return this.label; };
    get description(): number { return this.description; };
    get createdAt(): Date { return this.createdAt; };
    get updatedAt(): Date { return this.updatedAt; };
    get deletedAt(): Date { return this.deletedAt; };
    get user() : User { return this.user };
};


TaskList.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        label: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [0, 255]
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: 'id'
            }
        },
    },
    {
        sequelize,
        modelName: 'TaskList',
        timestamps: true,
        paranoid: true,
        underscored: true
    }
);

TaskList.user = TaskList.belongsTo(User);