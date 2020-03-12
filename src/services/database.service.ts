import { Task, TaskList, User } from "../models";

export class Database {
    public static syncModels = async () => {
        await User.sync({ force : true });
        await TaskList.sync({ force : true });
        await Task.sync({ force  : true });
    }
} 