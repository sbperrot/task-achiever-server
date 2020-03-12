import { Model, DataTypes } from "sequelize";
import { sequelize } from '../lib/database/sequelize';
import { TaskList } from "./tasklist.model";
import { User } from "./user.model";

export class Task extends Model {
    static user: any;
    static tasklist: any;

    get id(): number { return this.id; };
    get label(): number { return this.label; };
    get description(): number { return this.description; };
    get createdAt(): Date { return this.createdAt; };
    get updatedAt(): Date { return this.updatedAt; };
    get deletedAt(): Date { return this.deletedAt; };
    get user() : User { return this.user };
    get tasklist() : TaskList { return this.tasklist; };
};

Task.init(
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
        task_list_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: TaskList,
                key: 'id'
            }
        }
    },
    {
        sequelize,
        modelName: 'Task',
        timestamps: true,
        paranoid: true,
        underscored: true
    }
);

Task.tasklist = Task.belongsTo(TaskList);
Task.user = Task.belongsTo(User, { as: 'creator', foreignKey: 'id' });