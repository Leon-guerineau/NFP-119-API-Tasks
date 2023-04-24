import {Request, Response} from "express";
import {Task, ITask} from "../models/Task";

/**
 * List All Tasks
 */
export async function listAllTasks(req: Request, res: Response): Promise<void>
{
    // Try-catch de la r�cup�ration des t�ches
    try {
        // Recherche des t�ches
        const tasks: ITask[] = await Task.find();
        // Retour de la liste
        res.status(200).json(tasks);
    } catch (error) {
        // Retour de l'erreur
        console.log(error);
        res.status(500).json(error);
    }
}

/**
 * List Tasks by userId
 */
export async function listUserTasks(req: Request, res: Response): Promise<void>
{
    // R�cup�ration de l'identifiant utilisateur
    const userId: string = req.params.userId;

    // Try-catch de la r�cup�ration des t�ches
    try {
        // R�cup�ration des t�ches
        const tasks: ITask[] = await Task.find({userId: userId});
        // Retour de la liste
        res.status(200).json(tasks);
    } catch (error) {
        // Retour de l'erreur
        console.log(error);
        res.status(500).json(error);
    }
}

/**
 * Delete Tasks by userId
 */
export async function deleteUserTasks(req: Request, res: Response): Promise<void>
{
    // R?cup?ration de l'identifiant utilisateur
    const userId: string = req.params.userId;

    // Try-catch de la r?cup?ration des t?ches
    try {
        // R?cup?ration des t?ches
        await Task.deleteMany({userId: userId});
        // Retour
        res.status(200).json('T�ches supprim�s');
    } catch (error) {
        // Retour de l'erreur
        console.log(error);
        res.status(500).json(error);
    }
}

/**
 * Create Task
 */
export async function createTask(req: Request, res: Response): Promise<void>
{
    // Cr�ation de la nouvelle t�che
    const task = new Task(req.body);

    // Try-catch de la sauvegarde de la t�che
    try {
        // Sauvegarde de la t�che
        await task.save();
        // Retour de la t�che
        res.status(200).json(task);
    } catch (error) {
        // Retour de l'erreur
        console.log(error);
        res.status(500).json(error);
    }
}

/**
 * Read User
 */
export async function readTask(req: Request, res: Response): Promise<void>
{
    // R�cup�ration de l'identifiant de la t�che
    const taskId: string = req.params.taskId;

    // Try-catch de la r�cup�ration de la t�che
    try {
        // R�cup�ration de la t�che
        const task = await Task.findById(taskId);
        // Retour de la t�che
        res.status(200).json(task);
    } catch (error) {
        // Retour de l'erreur
        console.log(error);
        res.status(500).json(error);
    }
}

/**
 * Update Task
 */
export async function updateTask(req: Request, res: Response): Promise<void>
{
    console.log()
    // R�cup�ration de l'identifiant de la t�che
    const taskId: string = req.params.taskId;

    // Try-catch de la modification
    try {
        // Modification de la t�che
        await Task.findByIdAndUpdate(taskId, req.body);
        // Retour de la t�che
        res.status(200).json(await Task.findById(taskId));
    } catch (error) {
        // Retour de l'erreur
        console.log(error);
        res.status(500).json(error);
    }
}

/**
 * Delete Task
 */
export async function deleteTask(req: Request, res: Response): Promise<void>
{
    // R�cup�ration de l'identifiant de la t�che
    const taskId: string = req.params.taskId;

    // Try-catch de la suppression
    try {
        // Suppression de la t�che
        await Task.findByIdAndDelete(taskId);
        // Retour
        res.status(200);
    } catch (error) {
        // Retour de l'erreur
        console.log(error);
        res.status(500).json(error);
    }
}