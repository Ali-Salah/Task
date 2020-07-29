const mongoose = require('mongoose');

const machineProductTypeSchema = require('../Schemas/machineProductTypeSchema');

const MachineProductType = mongoose.model(
    'MachineProductType',
    machineProductTypeSchema
);

async function SeedingProductType() {
    const count = await MachineProductType.countDocuments();
    if (!count) {
        MachineProductType.insertMany([
            {
                type_id: 1,
                product_type: 'COFFEE_MACHINE_LARGE'
            },
            {
                type_id: 2,
                product_type: 'COFFEE_MACHINE_SMALL'
            },
            {
                type_id: 3,
                product_type: 'ESPRESSO_MACHINE'
            }
        ]);
    }
}

SeedingProductType();

module.exports = MachineProductType;
