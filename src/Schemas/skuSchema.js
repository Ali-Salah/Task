const mongoose = require('mongoose');

const coffeeMachineSchema = new mongoose.Schema({
    sku: {
        type: String,
        required: true
    }
});

module.exports = coffeeMachineSchema;
