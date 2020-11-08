let express = require('express');
let bodyParser = require('body-parser');
const app =  express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/people",function(req,res){
    res.json({name:"Tabish"});
});

app.get("/:name",function(req,res){
    res.send("Get data"+req.params.name);
});

app.post("/people/newCall",function(req,res){
    console.log("dada"+req.body.name)
    res.json({user:req.body.name});
    // res.send("ddaa");
    // if(req.body && req.body.user){
    //     res.json({"user": req.body.user})
    //     res.send("data send");
    //     res.end();
    // }
    // res.json({"user":req.body.user});
    // res.send("Data not send");
    // res.end();

})

app.post("/people/:name",function(req,res){
    // console.log(req.body.user)
    res.json({user:req.params.name});
})


app.listen(3000);