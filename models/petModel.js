// importing external modules
const mongoose = require('mongoose');

// collection name associated with the model
const collectionName = 'pets';

// creating schema
// obs: '_id' is of type ObejctId, added automatically by MongoDb
const petSchema = new mongoose.Schema(
    {
        ownerId: {
            type: ObjectId,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        weight: {
            type: Number,
            required: false
        },
        gender: {
            type: String,
            enum: ['male', 'female'],
            required: true
        },
        species: {
            type: String,
            required: true
        },
        breed: {
            type: String,
            required: false 
        },
        medicalConditions: {      
            type: [Object],
            required: false
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Pet', petSchema, collectionName);