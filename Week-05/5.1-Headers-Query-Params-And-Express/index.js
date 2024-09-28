const express = require("express");

const app = express();

app.get("/add/:ab/:ba",(req,res)=>{
    const a = parseInt(req.params.ab);
    const b = parseInt(req.params.ba);

     res.json({
        ans : a+b
     })
})

app.get("/subtract",(req,res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans : a-b
    })
})

app.get("/multiply",(req,res)=>{
    const a = (req.query.a);
    const b = (req.query.b);

    res.json({
        ans : a*b
    })
})

app.get("/divide",(req,res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans : a/b
    })
})

app.listen(3000);