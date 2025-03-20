const express=require("express");
const connectDB=require("./config/db");
const {signUp,login}=require("./controllers/userController");
const cors=require("cors");
require('dotenv').config();
const userRouter=require("./routes/userRoute");


const app=express();
app.use(express.json());
app.use(cors());

app.use('/api/auth', userRouter);

app.use("/",(req,res)=>{
    console.log("root route is hit");
    res.status(200).json("Welcome to the backend of E-Commerce Website");
});



app.listen(process.env.PORT,async()=>{
    try{
        await connectDB();
        console.log(`Server is listening to the port: ${process.env.PORT}`);
    }catch(err){
        console.log(err);
    }
})
