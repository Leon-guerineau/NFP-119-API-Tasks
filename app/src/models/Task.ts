import {Schema, Model, model} from "mongoose";

interface ITask {
    userId: string; // TODO : vrai liaison task/user
    name: string;
    detail: string;
    finished: boolean;
    createdAt: Date;
};

const TaskSchema = new Schema<ITask>({
    userId: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    detail: {
        type: String
    },
    finished: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Task: Model<ITask> = model('Task', TaskSchema);

export {Task, ITask}