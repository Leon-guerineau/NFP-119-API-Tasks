import express, { Application, Request, Response } from 'express';
import  { connect } from 'mongoose';
import * as UserHandler from './handlers/User';

const port: number = 8080;

const app: Application = express();
app.use(express.json());

// Routes pour users

app.get('/user/:id', UserHandler.getUserById);
app.get('/user/list', UserHandler.getAllUsers);
app.post('/user/new', UserHandler.addUser);
app.get('/user/remove/:id', UserHandler.deleteUser);


/**
 * /tasks -> addTask(post) -> getAlltask (get)
 * /tasks/:id 
 * /users/:id/tasks
 * /tasks/:id -> delete
 * 
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