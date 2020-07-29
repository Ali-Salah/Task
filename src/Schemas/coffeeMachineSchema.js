const mongoose = require('mongoose');

const coffeeMachineSchema = new mongoose.Schema(
    {
        product_type: {
            type: Number,
            required: true
        },
        water_line_compatible: {
            type: Boolean,
            required: true
        },
        sku_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'SKU'
        }
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);

coffeeMachineSchema.virtual('machineTypeRelation', {
    ref: 'MachineProductType',
    localField: 'product_type',
    foreignField: 'type_id'
});

module.exports = coffeeMachineSchema;
