const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middleware/notFound');
const errorHandlerMiddware = require('./middleware/errorHandler');

// middleware
app.use(express.json());
app.use(express.static('./public'));

//route
app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandlerMiddware);


const port =process.env.PORT ||  3000

const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on ${port}...` ))
    }catch (error){
        console.log(error)
    }
}

start()

