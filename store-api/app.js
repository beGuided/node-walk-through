require('dotenv').config();
require('express-async-errors');


const express = require('express');
const app = express();

const errorMiddleware = require('./middleware/errorHandler');
const notFound = require('./middleware/notFound');
const connectDB = require('./db/connect');
const productRouter = require('./routes/products')



// middleware
app.use(express.json())


// routes
app.get('/', function(req,res){
    res.send("<h1>store api </h1><a href='/api/v1/products'>product route</a>")
})

app.use('/api/v1/products',productRouter)

// prodct route
app.use(notFound);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
try{
    // connectDB
  await connectDB(process.env.MONGO_URI)
    app.listen(port,console.log(`server is listening port ${port}....`))
}catch(error){
 console.log(error);
}

}

start()