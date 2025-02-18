const express = require("express");
const cors = require("cors");
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const app = express();

const saltRunde = 10;

//MIDDLEWARE
app.use(cors());
app.use(express.json());

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server sluša zahtjeve na portu ${PORT} (๑˃ᴗ˂)ﻭ`);
});

//spajam se na bazu

mongoose.connect('mongodb://127.0.0.1:27017/VillaDaniela');

const db = mongoose.connection;

db.on('error', (error) =>{
    console.error('Greska pri spajanju:', error);
});
db.once('open', function(){
    console.log('Spojeni smoo na MongoDB bazu');
});


//Sve scheme
const { Schema } = mongoose;

const korisnikShema = new Schema({
    name: String,
    surname: String,
    email: { type: String, unique: true },
    password: String,
});
  

const Korisnik = mongoose.model("Korisnik", korisnikShema);




//rute
app.post('/registracija', async (req, res)=>{
    try{
        const hashPassword = await bcrypt.hash(req.body.password, saltRunde);
        const noviKorisnik = new Korisnik({...req.body, password: hashPassword});
        await noviKorisnik.save();
        res.status(201).send('Korinsik uspjesno registriran');
    } catch(error){
        res.status(500).send(error.message);
    }
});

app.post('/prijava', async (req, res) => {
    try {
      const korisnikBaza = await Korisnik.findOne({ email: req.body.email });
      if (korisnikBaza && await bcrypt.compare(req.body.password, korisnikBaza.password)) {
        res.send('Prijava uspješna');
        // Stvaranje login sesije ili tokena
      } else {
        res.status(401).send('Neispravni podaci za prijavu');
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
});
  