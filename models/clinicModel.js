// importing external modules
const mongoose = require('mongoose');

// collection name associated with the model
const collectionName = 'clinics';

// creating schema
// obs: '_id' is of type ObejctId, added automatically by MongoDb
const addressSchema = new mongoose.Schema(
    {
        streetName: {
            type: String,
            required: true
        },
        number: {
            type: String,
            required: true
        },
        complement: {
            type: String,
            required: false
        },
        district: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        zipCode: {
            type: String,
            required: true
        },
        reference: {
            type: String,
            required: false
        }
    }
);

const clinicSchema = new mongoose.Schema(
    {
        veterinariansIds: {
            type: [ObjectId],
            required: false
        },
        name: {
            type: String,
            required: true
        },
        address: {
            type: addressSchema,
            required: true
        },
        telephones: {
            type: Object,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        isActive: {
            type: Boolean,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Clinic', clinicSchema, collectionName);