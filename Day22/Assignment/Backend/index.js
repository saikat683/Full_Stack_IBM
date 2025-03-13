const express=require("express");
const app=express();
app.use(express.json());
const path=require("path");

const products=require("./data");
const { v4: uuidv4 } = require('uuid');
// console.log(products);

const port=3000;


//creating the welcome page route
app.get("/",(req,res)=>{
    res.status(200).send(`<h1>Welcome To The Main Page !</h1>`);
});


//creating the all products page route
app.get("/products",(req,res)=>{
    res.json(products);
});


//Route to return a specific page by id
app.get("/products/:id",(req,res)=>{
    let id=req.params.id;
    let product=products.find(p => p.id===id);
    if(!product){
        return res.status(404).json({"message":"Product Not Found"});
    }
    res.json(product); 
});


//Routes to add new products
app.post("/products",(req,res)=>{
    const {name,price,category}=req.body;
    if(!name || !price || !category){
        res.status(400).json({"message":"All fields are required"});
    }
    const newProduct={
        id:uuidv4(),name,price,category
    };
    // fs.writeFileSync(path.join(__dirname, 'products.json'), JSON.stringify(newProduct, null, 2));
    products.push(newProduct);
    res.status(200).json(newProduct);
});


//route for updating a product by id
app.put("/products/:id",(req,res)=>{
    let id=req.params.id;
    const {name,price,category}=req.body;

    let index=products.findIndex(p => p.id===id);

    if(index==-1){
       return  res.status(404).send({"message":"Product is not found"});
    }
    products[index].name=name;
    products[index].price=price;
    products[index].category=category;
    res.json(products[index]);
});


//Route for deleting products by id
app.delete("/products/:id",(req,res)=>{
    let id=req.params.id;
    let newProduct=products.filter(p => p.id!=id);
    if(products.length==newProduct.length){
        res.json({"message":"Products not found"});
    }
    res.json({"message":"Products deleted successfully"});
});


//Route for handling invalid requests
app.use((req,res)=>{
    res.status(404).json({"message":"Route not Found"});
});


//Making the app listen
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});