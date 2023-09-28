const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 3000;
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept');
    next();
});
app.get('/direcciones', async(req,res)=>{
    const apikey = AIzaSyB-lSS3vAo5eTvJ_M02kycKor5NY1moxsM
});

//localhost:3000/
//GET, POST <- APY Y PROXY
// AIzaSyB-lSS3vAo5eTvJ_M02kycKor5NY1moxsM
app.get('/mi.proxy',  (req,res)=>{
    const direccion1 = req.query.parametro1;
    const direccion2= req.query.parametro2;
    console.log('parametros recibidos!');
    console.log(direccion1);
    console.log(direccion2);
    res.send('datos recibidos!');
});

app.listen(port,()=>{
    console.log(`proxy escuchando en el puerto ${port}`);
});