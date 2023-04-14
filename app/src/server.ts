import express, {Application} from 'express';
import {connect} from 'mongoose';
import * as UserHandler from './handlers/User';
import * as TaskHandler from './handlers/Task';

const port: number = 8080;

const app: Application = express();
app.use(express.json());

// Routes pour Users

app.get('/users', UserHandler.getAllUsers);              // List all

app.post('/users', UserHandler.createUser);         // Create
app.get('/users/:id', UserHandler.readUser);             // Read
app.put('/users/:id', UserHandler.updateUser);      // Update
app.delete('/users/:id', UserHandler.deleteUser);   // Delete

// Routes pour Tasks

app.get('/tasks', TaskHandler.getAllTasks);              // List all
app.get('/users/:id/tasks', TaskHandler.getUserTasks);   // List by userId

app.post('/tasks', TaskHandler.createTask);         // Create
app.get('/tasks/:id', TaskHandler.readTask);             // Read
app.put('/tasks/:id', TaskHandler.updateTask);      // Update
app.delete('/tasks/:id', TaskHandler.deleteTask);   // Delete

/**
 * Database Connection
 */
const dbConnect = async (): Promise<void> => {

    const uri: string = "mongodb://root:mdproot@mongo:27017/";
    try {
        await connect(uri);
        console.log('mongo connecté ');
    } catch (error) {
        console.log(error);
    }
}

/**
 * Start Server
 */
app.listen(port, async () => {
    await dbConnect();
    console.log('Server listening on port ', port);
});