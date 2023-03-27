require('dotenv').config();

const connectDB = require('./db/connect');
const product = require('./models/product');
const Product = require('./models/product');


const jsonProducts= require('./products.json');


// const port = process.env.PORT || 3000;

const start = async () => {
try{
    // connectDB
  await connectDB(process.env.MONGO_URI);
  await Product.deleteMany();
  await product.create(jsonProducts)
  console.log('Sucess!!!');
  process.exit(0)
}catch(error){
 console.log(error);
 process.exit(1)
}

}

start()