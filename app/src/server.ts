import express, { Application, Request, Response } from 'express';
import  { connect } from 'mongoose';
import * as UserHandler from './handlers/User';
import * as TaskHandler from './handlers/Task';

const port: number = 8080;

const app: Application = express();
app.use(express.json());

// Routes pour Users

app.get('/users', UserHandler.getAllUsers);      // Read all

app.post('/users', UserHandler.addUser);         // Create
app.get('/users/:id', UserHandler.getUserById);  // Read
app.put('/users/:id', UserHandler.editUser);     // Update
app.delete('/users/:id', UserHandler.deleteUser);// Delete

// Routes pour Tasks

app.get('/tasks', TaskHandler.getAllTasks);      // Read all

app.post('/tasks', TaskHandler.createTask);      // Create
app.get('/tasks/:id', TaskHandler.readTask);     // Read
app.put('/tasks/:id', TaskHandler.updateTask);   // Update
app.delete('/tasks/:id', TaskHandler.deleteTask);// Delete

/**
 * /tasks -> addTask(post) -> getAlltask (get)
 * /users/:id/tasks
 */

const dbConnect = async (): Promise<void> => {

    const uri: string = "mongodb://root:mdproot@mongo:27017/";
    try {
        const cnx = await connect(uri);
        console.log('mongo connecté ');
    } catch (error) {
        console.log(error);
    }
}

// start server
app.listen(port, async () => {
    // database connection
    await dbConnect();
    console.log('Server listening on port ', port);
});