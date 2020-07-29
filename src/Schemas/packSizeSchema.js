const mongoose = require('mongoose');

const coffeeMachineSchema = new mongoose.Schema({
    size: {
        type: Number,
        required: true
    }
});

module.exports = coffeeMachineSchema;
