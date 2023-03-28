import {Request, Response} from "express";
import {User, IUser} from "../models/User";

/**
 * Read All Users
 */
export const getAllUsers = async (req: Request, res: Response): Promise<void> => {

    try {
        const users: IUser[] = await User.find();
        users ? res.json(users) : res.status(404).send({
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
 * Create User
 */
export const createUser = async (req: Request, res: Response): Promise<void> => {

    const user = new User(req.body);
    try {
        await user.save();
        res.json(user);
    } catch (error) {
        res.status(500).json({error: error});
    }
}

/**
 * Read User
 */
export const readUser = async (req: Request, res: Response): Promise<void> => {

    const id = req.params.id;
    try {
        const user = await User.findById(id);
        user ? res.json(user) : res.status(404).send({
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
 * Update User
 */
export const updateUser = async (req: Request, res: Response): Promise<void> => {

    const userId = req.params.id;
    try {
        await User.findByIdAndUpdate(userId, req.body);
        res.json(userId + ' updated');
    } catch (error) {
        res.status(500).json({error: error});
    }
}

/**
 * Delete User
 */
export const deleteUser = async (req: Request, res: Response): Promise<void> => {

    const userId: String = req.params.id;
    try {
        await User.findByIdAndDelete(userId)
        res.json(userId + ' deleted');
    } catch (error) {
        res.status(500).json({error: error});
    }
}