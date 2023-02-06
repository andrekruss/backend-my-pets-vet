// importing external modules
const mongoose = require('mongoose');

// collection name associated with the model
const collectionName = 'clients';

// creating schema
// obs: '_id' is of type ObejctId, added automatically by MongoDb
const clientSchema = new mongoose.Schema(
    {
        userId: {
            type: ObjectId,
            required: true
        },
        petsIds: {
            type: [ObjectId],
            required: false
        },
        appointmentsIds: {
            type: [ObjectId],
            required: false
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        gender: {
            type: String,
            required: true
        },
        telephones: {
            type: Object,
            required: true
        },
        email: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Client', clientSchema, collectionName);