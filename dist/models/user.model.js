"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../lib/database/sequelize");
class User extends sequelize_1.Model {
    get id() { return this.id; }
    ;
    get firstName() { return this.firstName; }
    ;
    get lastName() { return this.lastName; }
    ;
}
exports.User = User;
;
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    firstName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    lastName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [8, Infinity]
        }
    }
}, {
    sequelize: sequelize_2.sequelize,
    modelName: 'User',
    timestamps: true,
    paranoid: true,
    underscored: true
});
//# sourceMappingURL=user.model.js.map