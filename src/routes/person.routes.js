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
person_routes.get('/person/:id', (req, res)=>{
    const {id} = req.params
    user_schema.
    findById(id)
    .then((data)=>res.json(data))
    .catch((err)=>res.json({message: err}))
    
})
person_routes.put('/person/:id', (req, res)=>{
    const {id} = req.params
    const{user_name, lastname, age, email, proffession}=req.body
    user_schema.
    updateOne({_id:id},{$set:{user_name, lastname, age, email, proffession}})
    .then((data)=>res.json(data))
    .catch((err)=>res.json({message: err}))
})
person_routes.delete('/person/:id', (req, res)=>{
    const {id} = req.params
    user_schema.
    remove({_id:id})
    .then((data)=>res.json(data))
    .catch((err)=>res.json({message: err}))
})


module.exports = person_routes;