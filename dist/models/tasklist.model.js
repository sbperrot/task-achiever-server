"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../lib/database/sequelize");
const user_model_1 = require("./user.model");
class TaskList extends sequelize_1.Model {
    get id() { return this.id; }
    ;
    get label() { return this.label; }
    ;
    get description() { return this.description; }
    ;
    get createdAt() { return this.createdAt; }
    ;
    get updatedAt() { return this.updatedAt; }
    ;
    get deletedAt() { return this.deletedAt; }
    ;
    get user() { return this.user; }
    ;
}
exports.TaskList = TaskList;
;
TaskList.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    label: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [0, 255]
        }
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: user_model_1.User,
            key: 'id'
        }
    },
}, {
    sequelize: sequelize_2.sequelize,
    modelName: 'TaskList',
    timestamps: true,
    paranoid: true,
    underscored: true
});
TaskList.user = TaskList.belongsTo(user_model_1.User);
//# sourceMappingURL=tasklist.model.js.map