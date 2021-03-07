const express =  require("express")
const app = express();

app.get('/',(req,res)=>{
    res.send("Helli fron server ")
})


app.listen(5000,()=>{
    console.log("heloo form port 5000");
})