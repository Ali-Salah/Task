const mongoose = require('mongoose');

const podProductTypeSchema = new mongoose.Schema({
    type_id: { type: Number, required: true },

    product_type: {
        type: String,
        required: true
    }
});

module.exports = podProductTypeSchema;