const mongoose = require('mongoose');

const coffePodsSchema = new mongoose.Schema(
    {
        product_type: {
            type: Number,
            required: true
        },
        coffee_flavor: {
            type: Number,
            required: true
        },
        pack_size: {
            type: Number,
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

coffePodsSchema.virtual('podsTypeRelation', {
    ref: 'PodProductType',
    localField: 'product_type',
    foreignField: 'type_id'
});

coffePodsSchema.virtual('podsFlavorRelation', {
    ref: 'CoffeeFlavor',
    localField: 'coffee_flavor',
    foreignField: 'flavor_id'
});

coffePodsSchema.virtual('podsSizeRelation', {
    ref: 'PackSize',
    localField: 'pack_size',
    foreignField: 'size'
});

module.exports = coffePodsSchema;
