"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize(String(process.env.PG_DATABASE), String(process.env.PG_USER), String(process.env.PG_PASSWORD), {
    host: String(process.env.PG_HOST),
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});
//# sourceMappingURL=sequelize.js.map