const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config()
const port = 3000;
const user_route = require("./routes/person.routes") 
app.listen(port,()=>console.log('server listening on port', port));

mongoose
.connect(process.env.DATABASE_CONNECTION)
.then(()=>console.log('Connect to mongodb'))
.catch((err) => console.error(err))

app.use(express.json());

app.get('/home', (req, res) => res.send('hello world'))

app.use("/api/v1/people", user_route)