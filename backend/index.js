const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

app.use(cors());
app.use(bodyparser.json());

// connection
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'userinfo',
    port:3306
})

// check database connection
db.connect(err=>{
    if(err){
        console.log('error')
    }else{
        console.log('connected')
    }
})

// get All data
app.get('/users',(req,res)=>{
    let qrr=`select * from users`;
    db.query(qrr,(err,results)=>{
        if(err){
            console.log(err,'err')
        }
        if(results.length>0){
            res.send({
                message:'get all data',
                data:results
            })
        }
    })
});

// get data by id
app.get('/users/:id',(req,res)=>{
     let qrId = req.params.id;
    let qr =`select * from users where id = ${qrId}`;
    db.query(qr,(err,results)=>{
        if(err){
            console.log(err);
        }
        if(results.length>0){
            res.send({
                message:"get data by ID",
                data:results
            })
        }else{
            res.send({
                message:"data not found"
            })
        }
    })
});

// post data

app.post('/user',(req,res)=>{
    let fullName = req.body.fullname;
    let eMail = req.body.email
    let Mobile = req.body.mobile

    let qr =`insert into users(fullname,email,mobile) value('${fullName}','${eMail}','${Mobile}')`;
    db.query(qr,(err,results)=>{
        if(err){console.log(err)}
        res.send({
            message:"data added successfully",
            data:results
        })
    })
})

// put && update

app.put('/user/:id',(req,res)=>{
    let uID = req.params.id;
    let fullName = req.body.fullname;
    let eMail = req.body.email
    let Mobile = req.body.mobile

    let qr = `update users set fullname = '${fullName}',email = '${eMail}',mobile = '${Mobile}' where id = '${uID}'`
    db.query(qr,(err,results)=>{
        if(err){console.log(err)}
        res.send({
            message:"Data Updated successfull",
            data:results
        })
    })
})

// delete api
app.delete('/deleteuser/:id',(req,res)=>{
    let uID = req.params.id;
    let qr = `delete from users where id = '${uID}'`;
    db.query(qr,(err,results)=>{
        if(err){console.log(err)}
        res.send({
            message:"data deleted successfull"
        })
    })
})



app.listen(3000,()=>{
    console.log("server is running on 3000 Port")
})