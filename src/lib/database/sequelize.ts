import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
    String(process.env.PG_DATABASE),
    String(process.env.PG_USER),
    String(process.env.PG_PASSWORD),
    { 
        host: String(process.env.PG_HOST),
        dialect: 'postgres', 
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
);