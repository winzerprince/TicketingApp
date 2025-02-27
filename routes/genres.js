const express = require('express');
const router = express.Router();
const Joi = require('joi');
const mongoose = require('mongoose');

//Generates a mongodb schema
const genreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 255,
        minlength: 0,

    },
    popularity: {
        type: Number,
        required: true,
        max: 100,
        min: 0,
    }

})

const Genre = mongoose.model('Genre', genreSchema);





//create a method to create a new document
async function createGenre(name, popularity) {
    const genre = await new Genre({
        name: name,
        popularity: popularity
    });

    try {
        const result = await genre.save();
        console.log('Document saved successfully...\n' + result);
    }
    catch (ex) {
        for (field in ex.errors) {
            console.log(ex.errors[field].message);
        }
    }
}

const allGenres = returnGenre('6787642e7fdf03421810559d','6787642e7fdf03421810559e','6787642e7fdf03421810559f','6787642e7fdf0342181055a0')
//create return method to return selected documents 
async function returnGenre(...ids) {
    /*id.map(async (id) => {
        return await Genre
        .find({ _id: id })
    })*/
    try {
        const genres = await Genre.find({ _id: { $in: ids } });
        return genres;
    }
    catch (err) {
        console.log('Error fetching genres: ' + err.message)
    }
    
                
}




//create an update method to update a given document
async function updateGenre(id, field, newValue) {
    const result = await Genre.updateOne({ _id: id }, { $set: { field: newValue } });
    console.log(result);
    
}




//create a delete method to delete a given document
async function deleteGenre(id) {
    const result = await Genre.deleteOne({ _id: id });
    console.log(result);
}





//Array of genres
/*const genres = [
    { id: 1, name: 'Adventure' },
    { id: 2, name: 'Action' },
    { id: 3, name: 'Horror' },
    { id: 4, name: 'Comedy' },

];*/


// Get request
router.get('/', async (req, res) => {
    const genres = await Genre.find().sort('name')
    res.send(genres);
})

// Post request
router.post('/', async(req, res) => {
    // Check if post is valid
    inputValidate(req.body, res);
    // Add the request
    let genre = new Genre({name: req.body.name, popularity: req.body.popularity})
    genre = await genre.save();
    // View the genres list
    res.send(genre);
})



// Put request
router.put('/:id',async (req, res) => {
    inputValidate(req.body, res);
    let genre = await Genre.findByIdAndUpdate(req.params.id,{name:req.body.name, popularity:req.body.popularity}, {new: true} );
   
    if (!genre) return res.status(404).send(`The resource with id ${req.params.id} does not exist`);
    //return the genres object
    res.send(genre);
})

// Delete request
router.delete('/:id', async (req, res) => {
    // Check if resource exists
    const genre = await Genre.findByIdAndDelete(req.params.id);
    
    if (!genre) return res.status(404).send(`The resource with id ${req.params.id} does not exist`);
 
    res.send(genre);
})



// Input validation function
function inputValidate(input, res) {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        popularity: Joi.number().min(0).max(100).required()
    });
    const { error } = schema.validate(input);
    if (error) {
        return res.status(400).send(error);
    }

}


module.exports = router;