const express = require("express");
const cors = require("cors");
const jwt = require('jsonwebtoken');

const app = express();

//MIDDLEWARE
app.use(cors());
app.use(express.json());

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server sluša zahtjeve na portu ${PORT} (๑˃ᴗ˂)ﻭ`);
});