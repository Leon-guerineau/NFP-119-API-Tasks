import express, {Application} from 'express';
import {connect} from 'mongoose';
import * as UserHandler from './handlers/User';
import * as TaskHandler from './handlers/Task';
import cors from 'cors';
import {listUserTasks} from "./handlers/Task";

const port: number = 8080;

// Mise en place d'express
const app: Application = express();
app.use(express.json());

// Mise en place du middleware pour externaliser l'accès à l'API
app.use(cors());

/**
 * Routes pour Users
 */

app.get('/users', UserHandler.listAllUsers);                 // List all

app.post('/users', UserHandler.createUser);             // Create
app.get('/users/:userId', UserHandler.readUser);             // Read
app.put('/users/:userId', UserHandler.updateUser);      // Update
app.delete('/users/:userId', UserHandler.deleteUser);   // Delete

/**
 * Routes pour Tasks
 */

app.get('/tasks', TaskHandler.listAllTasks);                     // List all
app.get('/users/:userId/tasks', TaskHandler.listUserTasks);      // List by userId

app.post('/tasks', TaskHandler.createTask);                 // Create
app.get('/tasks/:taskId', TaskHandler.readTask);                 // Read
app.put('/tasks/:taskId', TaskHandler.updateTask);          // Update
app.delete('/tasks/:taskId', TaskHandler.deleteTask);       // Delete

/**
 * Database Connection
 */
async function dbConnect(): Promise<void>
{
    const uri: string = 'mongodb+srv://guerineauleon:gQDgEQ8w4n9cFxqS@cluster0.lvugglx.mongodb.net/?retryWrites=true&w=majority'
    try {
        await connect(uri);
        console.log('mongo connecté');
    } catch (error) {
        console.log(error);
    }
}

/**
 * Start Server
 */
app.listen(port, async () => {
    await dbConnect();
    console.log('Server listening on port : ', port);
});