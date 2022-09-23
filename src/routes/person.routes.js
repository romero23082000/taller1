const express = require('express');
const person_routes = express.Router();
const user_schema = require('../models/person.model.js')

person_routes.post('/person', (req, res)=>{
    const new_person = user_schema(req.body);
    new_person.save()
    .then((data)=>{
        res.json(data);
    }).catch((err)=>{
        res.json({message: err})
    })
})
person_routes.get('/person', (req, res)=>{
    user_schema
    .find()
    .then((data)=>res.json(data))
    .catch((err)=>res.json({message: err}))
})
person_routes.get('/', (req, res)=>{})
person_routes.put('/', (req, res)=>{})
person_routes.delete('/', (req, res)=>{})


module.exports = person_routes;