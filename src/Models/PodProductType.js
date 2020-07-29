const mongoose = require('mongoose');

const podProductTypeSchema = require('../Schemas/podProductTypeSchema');

const PodProductType = mongoose.model('PodProductType', podProductTypeSchema);

async function SeedingProductType() {
    const count = await PodProductType.countDocuments();
    if (!count) {
        PodProductType.insertMany([
            {
                type_id: 1,
                product_type: 'COFFEE_POD_LARGE'
            },
            {
                type_id: 2,
                product_type: 'COFFEE_POD_SMALL'
            },
            {
                type_id: 3,
                product_type: 'ESPRESSO_POD'
            }
        ]);
    }
}

SeedingProductType();

module.exports = PodProductType;
