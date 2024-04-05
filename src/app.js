require('dotenv').config();
const cors    = require("cors");
const morgan  = require("morgan");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));

app.use(morgan('dev'));
app.use(cors());

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', DOMAIN_CLIENT); // update to match the domain you will make the request from
//     res.header('Access-Control-Allow-Credentials', 'true');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//     next();
// });

app.get("/", ( req, res )=>{
    res.status(200).json({
        mensaje : "prueba ok"
    })
})

module.exports = app;