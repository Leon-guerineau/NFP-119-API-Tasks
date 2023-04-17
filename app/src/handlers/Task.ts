import {Request, Response} from "express";
import {Task, ITask} from "../models/Task";

/**
 * List All Tasks
 */
export async function listAllTasks(req: Request, res: Response): Promise<void>
{
    // Try-catch de la récupération des tâches
    try {
        // Recherche des tâches
        const tasks: ITask[] = await Task.find();
        // Retour de la liste
        res.status(200).json(tasks);
    } catch (error) {
        // Retour de l'erreur
        res.status(500).json(error); // TODO : error
    }
}

/**
 * List Tasks by userId
 */
export const listUserTasks = async (req: Request, res: Response): Promise<void> => {
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