// importing external modules
const mongoose = require('mongoose');

// collection name associated with the model
const collectionName = 'appointments';

// creating schema
// obs: '_id' is of type ObejctId, added automatically by MongoDb
const appointmentSchema = new mongoose.Schema(
    {
        previousAppointmentsIds: {
            type: [ObjectId],
            required: false
        },
        clientId: {
            type: ObjectId,
            required: true
        },
        petId: {
            type: ObjectId,
            required: true
        },
        veterinarianId: {
            type: ObjectId,
            required: true
        },
        clinicId: {
            type: ObjectId,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        status: {
            type: String,
            enum: ['created', 'cancelled', 'follow-up', 'finished'],
            required: true
        },
        date: {
            type: Date,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Appointment', appointmentSchema, collectionName);