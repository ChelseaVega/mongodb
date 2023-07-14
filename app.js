require('dotenv').config();
const express = require('express');
const app= express (); //crea una nueva app express en la variable aux

//para poder utilikzar el modulo de mongoose 
const mongoose = require('mongoose');

(async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI_TEST);
        console.log('Te has conectado a MongoDB');
    }catch(error){
        console.log(error);
    }

})()

//luego de esto debemos iniciar nuestro servidor
module.exports = app;