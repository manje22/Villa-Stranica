const express = require("express");
const cors = require("cors");
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');


const app = express();

//MIDDLEWARE
app.use(cors());
app.use(express.json());

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server sluša zahtjeve na portu ${PORT} (๑˃ᴗ˂)ﻭ`);
});

//spajam se na bazu
mongoose.connect('mongodb://127.0.0.1:27017/VillaDaniela',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) =>{
    console.error('Greska pri spajanju:', error);
});
db.once('open', function(){
    console.log('Spojeni smoo na MongoDB bazu');
});