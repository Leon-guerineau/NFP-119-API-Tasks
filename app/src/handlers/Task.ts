import {Request, Response} from "express";
import {Task, ITask} from "../models/Task";

/**
 * List All Tasks
 */
export const getAllTasks = async (req: Request, res: Response): Promise<void> => {

    try {
        const tasks: ITask[] = await Task.find();
        tasks ? res.json(tasks) : res.status(404).send({
            error: {
                code: 404,
                message: "Not found"
            }
        });
    } catch (error) {
        res.status(500).json({error: error});
    }
}

/**
 * List Tasks by userId
 */
export const getUserTasks = async (req: Request, res: Response): Promise<void> => {
    const userId: String = req.params.id;
    try {
        const tasks: ITask[] = await Task.find({userId: userId});
        tasks ? res.json(tasks) : res.status(404).send({
            error: {
                code: 404,
                message: "Not found"
            }
        });
    } catch (error) {
        res.status(500).json({error: error});
    }
}

/**
 * Create Task
 */
export const createTask = async (req: Request, res: Response): Promise<void> => {

    const task = new Task(req.body);
    try {
        await task.save();
        res.json(task);
        // res.redirect('/tasks');
    } catch (error) {
        res.status(500).json({error: error});
    }
}

/**
 * Read User
 */
export const readTask = async (req: Request, res: Response): Promise<void> => {

    const taskId = req.params.id;
    try {
        const task = await Task.findById(taskId);
        task ? res.json(task) : res.status(404).send({
            error: {
                code: 404,
                message: "Task not found"
            }
        });
    } catch (error) {
        res.status(500).json({error: error});
    }
}

/**
 * Update Task
 */
export const updateTask = async (req: Request, res: Response): Promise<void> => {

    const taskId = req.params.id;
    try {
        await Task.findByIdAndUpdate(taskId, req.body);
        res.json(taskId + ' updated');
    } catch (error) {
        res.status(500).json({error: error});
    }
}

/**
 * Delete Task
 */
export const deleteTask = async (req: Request, res: Response): Promise<void> => {

    const taskId = req.params.id;
    try {
        await Task.findByIdAndDelete(taskId)
        res.json(taskId + ' deleted');
    } catch (error) {
        res.status(500).json({error: error});
    }
}