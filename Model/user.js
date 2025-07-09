const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    age: {
        type: Number
    },
    gender: {
        type: String
    }

});

module.exports = mongoose.model('User', UserSchema);

/*
Schema: Defines the structure and rules for documents.
Model: Provides an interface to interact with the database collection.
Use them: To ensure data consistency, validation, and to simplify database operations in your Node.js app.
*/