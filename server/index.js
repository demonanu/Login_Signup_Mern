const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./models/Employee')
const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://anubh:anubh@cluster0.1pxote0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/user")
//change and write your own connection url and you are good to go
app.post('/login',(req,res)=>{
    const {email,password} = req.body;
    EmployeeModel.findOne({email:email})
    .then(user =>{
        if(user){
            if(user.password === password){
                res.json('Success')
            }
            else{
                res.json("password incorrect") 
            }
        }
        else{
            res.json("No user")
        }
    })
})
app.post('/register', (req,res)=>{
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

app.listen(3003, ()=>{
    console.log("Server is running")
})