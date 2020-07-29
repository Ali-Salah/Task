const mongoose = require('mongoose');

const coffeeFlavorSchema = require('../Schemas/coffeeFlavorSchema');

const CoffeeFlavor = mongoose.model('CoffeeFlavor', coffeeFlavorSchema);

async function SeedingProductType() {
    const count = await CoffeeFlavor.countDocuments();
    if (!count) {
        CoffeeFlavor.insertMany([
            {
                flavor_id: 1,
                flavor_type: 'COFFEE_FLAVOR_VANILLA'
            },
            {
                flavor_id: 2,
                flavor_type: 'COFFEE_FLAVOR_CARAMEL'
            },
            {
                flavor_id: 3,
                flavor_type: 'ESPRESSO_PODCOFFEE_FLAVOR_PSL'
            },
            {
                flavor_id: 4,
                flavor_type: 'COFFEE_FLAVOR_MOCHA'
            },
            {
                flavor_id: 5,
                flavor_type: 'COFFEE_FLAVOR_HAZELNUTs'
            }
        ]);
    }
}

SeedingProductType();

module.exports = CoffeeFlavor;
