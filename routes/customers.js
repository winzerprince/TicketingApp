const express = require('express');
const Joi = require('joi');
const router = express.Router();
const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: { type: String, required: true, maxlength: 255 },
    premium: Boolean,
    email: { type: String, required: true, maxlength: 255 },
    password: String,
    fav_genres: [String]
    
})

const Customer = mongoose.model('Customer', customerSchema);

router.get('/:id', async (req, res) => {
    const customer = await Customer.findById(req.params.id);
    res.send(customer);


})

router.get('/', async (req, res) => {
    const customer = await Customer.find().sort('name');
    res.send(customer);


})

router.post('/', async (req, res) => {
    inputValidate(req.body, res)
    let customer = new Customer({
        name: req.body.name,premium:req.body.premium, email: req.body.email, fav_genres: req.body.fav_genre
    });
    try {
        customer = await customer.save();
    }
    catch (err) {
        console.log('Error saving customer: ' + err.message);
    }
    res.send(customer);
})

router.put('/:id', async (req, res) => {
    
    const customer = await customer.findByIdAndUpdate(req.params.id, {
        name: req.body.name, password: req.body.premium, email: req.body.email,
        password: req.body.password, fav_genres: req.body.fav_genres
    }, { new: true });
    if (!customer) console.log("Customer with id" + req.params.id + " was not found");
    res.send(customer);

})

router.delete('/:id', async (req, res) => {
    const customer = Customer.findByIdAndDelete(req.params.id);
    if (!customer) console.log('Customer with id ' + req.params.id + " was not found");
    res.send(customer);
})

function inputValidate(input, res) {
    const schema = Joi.object({
        name: Joi.string().minLength(3).maxLength(255).required(),
        premium: Joi.boolean(),
        email: Joi.string().required()
    })
    const { error } = schema.validate(input);
    if (error) return res.status(400).send(error);
}

module.exports = router;