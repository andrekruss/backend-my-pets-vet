// importing external modules
const mongoose = require('mongoose');

// collection name associated with the model
const collectionName = 'users';

// creating schema
// obs: '_id' is of type ObejctId, added automatically by MongoDb
const userSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        isActive: {
            type: Boolean,
            required: true
        },
        userType: {
            type: String,
            enum: ['client', 'veterinarian', 'clinic'],
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('User', userSchema, collectionName);