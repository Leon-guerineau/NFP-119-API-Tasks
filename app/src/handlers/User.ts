import { Request, Response } from "express";
import { User, IUser } from "../models/User";



// create user 
const addUser = async (req: Request, res: Response): Promise<void> => {
    
    const user = new User(req.body);
    try {
        await user.save();
        res.json(user);
    } catch (e) {
        res.status(500).json({error : e});
    }

    
}


// getUserByID
const getUserById = async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id;
    try {
        const user = await User.findById(id);
        user ? res.json(user) : res.status(404).send({error : {
            code : 404,
            message : "Not found"
        }});
    } catch (e) {
        res.status(500).json({error : e});
    }

}

// getAllUsers 
const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users:IUser[] = await User.find();
        users ? res.json(users) : res.status(404).send({error : {
            code : 404,
            message : "Not found"
        }});
    } catch (e) {
        res.status(500).json({error : e});
    }
}


export { addUser, getUserById, getAllUsers }




