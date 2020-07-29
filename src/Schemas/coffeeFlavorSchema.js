const mongoose = require('mongoose');

const coffeeFlavorSchema = new mongoose.Schema({
    flavor_id: { type: Number, required: true },

    flavor_type: {
        type: String,
        required: true
    }
});

module.exports = coffeeFlavorSchema;
