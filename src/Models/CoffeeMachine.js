const mongoose = require('mongoose');
const coffeeMachineSchema = require('../Schemas/coffeeMachineSchema');

const CoffeeMachine = mongoose.model('CoffeeMachine', coffeeMachineSchema);

async function SeedingProductType() {
    const count = await CoffeeMachine.countDocuments();
    if (!count) {
        CoffeeMachine.insertMany([
            {
                product_type: 1,
                water_line_compatible: true,
                sku_id: '5f20d1fe1ef2dc326c968ca7'
            },
            {
                product_type: 1,
                water_line_compatible: true,
                sku_id: '5f20d1fe1ef2dc326c968ca8'
            },
            {
                product_type: 2,
                water_line_compatible: true,
                sku_id: '5f20d1fe1ef2dc326c968cab'
            },
            {
                product_type: 3,
                water_line_compatible: true,
                sku_id: '5f20d1fe1ef2dc326c968cae'
            },
            {
                product_type: 1,
                water_line_compatible: false,
                sku_id: '5f20d1fe1ef2dc326c968ca6'
            },
            {
                product_type: 2,
                water_line_compatible: false,
                sku_id: '5f20d1fe1ef2dc326c968ca9'
            },
            {
                product_type: 2,
                water_line_compatible: false,
                sku_id: '5f20d1fe1ef2dc326c968caa'
            },
            {
                product_type: 3,
                water_line_compatible: false,
                sku_id: '5f20d1fe1ef2dc326c968cac'
            },
            {
                product_type: 3,
                water_line_compatible: false,
                sku_id: '5f20d1fe1ef2dc326c968cad'
            }
        ]);
    }
}

SeedingProductType();

module.exports = CoffeeMachine;
