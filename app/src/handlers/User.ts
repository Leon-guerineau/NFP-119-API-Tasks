import {Request, Response} from "express";
import {User, IUser} from "../models/User";

/**
 * List All Users
 */
export async function getAllUsers(req: Request, res: Response): Promise<void>
{
    // Try-catch de la r�cup�ration des utilisateurs
    try {
        // Recherche des utilisateurs
        const users: IUser[] = await User.find();
        // Retour de la liste
        res.json(users);
    } catch (error) {
        // Retour de l'erreur
        res.status(500).json({error: error}); // TODO : error
    }
}

/**
 * Create User
 */
export async function createUser(req: Request, res: Response): Promise<void>
{
    // Cr�ation du nouvel utilisateur
    const user = new User(req.body);
    try {
        // Sauvegarde du nouvel utilisateur
        await user.save();
        // Retour de l'utilisateur
        res.json(user);
    } catch (error) {
        // Retour de l'erreur
        res.status(500).json({error: error}); // TODO : error
    }
}

/**
 * Read User
 */
export async function readUser(req: Request, res: Response): Promise<void>
{
    // R�cup�ration de l'identifiant utilisateur
    const userId: string = req.params.userId;

    // Try-catch de la r�cup�ration de l'utilisateur
    try {
        // R�cup�ration de l'utilisateur
        const user = await User.findById(userId);
        // Retour de l'utilisateur
        res.json(user);
    } catch (error) {
        // Retour de l'erreur
        res.status(500).json({error: error}); // TODO : error
    }
}

/**
 * Update User
 */
export async function updateUser(req: Request, res: Response): Promise<void>
{
    // R�cup�ration de l'identifiant utilisateur
    const userId: string = req.params.userId;

    // Try-catch de la modification
    try {
        // R�cup�ration de l'utilisateur
        await User.findByIdAndUpdate(userId, req.body);
        // Retour de l'utilisateur
        res.json(await User.findById(userId));
    } catch (error) {
        // Retour de l'erreur
        res.status(500).json({error: error}); // TODO : error
    }
}

/**
 * Delete User
 */
export async function deleteUser(req: Request, res: Response): Promise<void>
{
    // R�cup�ration de l'identifiant utilisateur
    const userId: String = req.params.userId;

    // Try-catch de la suppression
    try {
        // Suppression de l'utilisateur
        await User.findByIdAndDelete(userId);
    } catch (error) {
        // Retour de l'erreur
        res.status(500).json({error: error}); // TODO : error
    }
}