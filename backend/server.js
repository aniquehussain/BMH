const express = require('express');
const app = express();
const {success,error} = require('consola');
const PORT = 3000;



app.get('/',async(req,res)=>{
    res.send("Bharat Medical Hall")
})









app.listen(PORT,async(req,res)=>{
    try {
        success({ message: "CORS-enabled web server listening on port " + PORT, badge: true });
    } catch (err) {
        error({ message: "Unable to connect to Database", badge: true });
        connectDB();
    }

})