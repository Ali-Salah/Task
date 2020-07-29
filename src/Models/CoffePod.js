const mongoose = require('mongoose');
const coffePodsSchema = require('../Schemas/coffePodsSchema');

const CoffePod = mongoose.model('CoffePod', coffePodsSchema);

async function SeedingProductType() {
    const count = await CoffePod.countDocuments();
    if (!count) {
        CoffePod.insertMany([
            {
                product_type: 1,
                coffee_flavor: 1,
                pack_size: 1,
                sku_id: '5f2162336f2fce262c45ac26'
            },
            {
                product_type: 1,
                coffee_flavor: 1,
                pack_size: 3,
                sku_id: '5f2162336f2fce262c45ac27'
            },
            {
                product_type: 1,
                coffee_flavor: 1,
                pack_size: 5
            },
            {
                product_type: 1,
                coffee_flavor: 1,
                pack_size: 7
            },
            {
                product_type: 1,
                coffee_flavor: 2,
                pack_size: 1,
                sku_id: '5f2162336f2fce262c45ac28'
            },
            {
                product_type: 1,
                coffee_flavor: 2,
                pack_size: 3,
                sku_id: '5f2162336f2fce262c45ac29'
            },
            {
                product_type: 1,
                coffee_flavor: 2,
                pack_size: 5
            },
            {
                product_type: 1,
                coffee_flavor: 2,
                pack_size: 7
            },
            {
                product_type: 1,
                coffee_flavor: 3,
                pack_size: 1,
                sku_id: '5f2162336f2fce262c45ac2a'
            },
            {
                product_type: 1,
                coffee_flavor: 3,
                pack_size: 3,
                sku_id: '5f2162336f2fce262c45ac2b'
            },
            {
                product_type: 1,
                coffee_flavor: 3,
                pack_size: 5
            },
            {
                product_type: 1,
                coffee_flavor: 3,
                pack_size: 7
            },
            {
                product_type: 1,
                coffee_flavor: 4,
                pack_size: 1,
                sku_id: '5f2162336f2fce262c45ac2c'
            },
            {
                product_type: 1,
                coffee_flavor: 4,
                pack_size: 3,
                sku_id: '5f2162336f2fce262c45ac2d'
            },
            {
                product_type: 1,
                coffee_flavor: 4,
                pack_size: 5
            },
            {
                product_type: 1,
                coffee_flavor: 4,
                pack_size: 7
            },
            {
                product_type: 1,
                coffee_flavor: 5,
                pack_size: 1,
                sku_id: '5f2162336f2fce262c45ac2e'
            },
            {
                product_type: 1,
                coffee_flavor: 5,
                pack_size: 3,
                sku_id: '5f2162336f2fce262c45ac2f'
            },
            {
                product_type: 1,
                coffee_flavor: 5,
                pack_size: 5
            },
            {
                product_type: 1,
                coffee_flavor: 5,
                pack_size: 7
            },
            {
                product_type: 2,
                coffee_flavor: 1,
                pack_size: 1,
                sku_id: '5f2162336f2fce262c45ac1c'
            },
            {
                product_type: 2,
                coffee_flavor: 1,
                pack_size: 3,
                sku_id: '5f2162336f2fce262c45ac1d'
            },
            {
                product_type: 2,
                coffee_flavor: 1,
                pack_size: 5
            },
            {
                product_type: 2,
                coffee_flavor: 1,
                pack_size: 7
            },
            {
                product_type: 2,
                coffee_flavor: 2,
                pack_size: 1,
                sku_id: '5f2162336f2fce262c45ac1e'
            },
            {
                product_type: 2,
                coffee_flavor: 2,
                pack_size: 3,
                sku_id: '5f2162336f2fce262c45ac1f'
            },
            {
                product_type: 2,
                coffee_flavor: 2,
                pack_size: 5
            },
            {
                product_type: 2,
                coffee_flavor: 2,
                pack_size: 7
            },
            {
                product_type: 2,
                coffee_flavor: 3,
                pack_size: 1,
                sku_id: '5f2162336f2fce262c45ac20'
            },
            {
                product_type: 2,
                coffee_flavor: 3,
                pack_size: 3,
                sku_id: '5f2162336f2fce262c45ac21'
            },
            {
                product_type: 2,
                coffee_flavor: 3,
                pack_size: 5
            },
            {
                product_type: 2,
                coffee_flavor: 3,
                pack_size: 7
            },
            {
                product_type: 2,
                coffee_flavor: 4,
                pack_size: 1,
                sku_id: '5f2162336f2fce262c45ac22'
            },
            {
                product_type: 2,
                coffee_flavor: 4,
                pack_size: 3,
                sku_id: '5f2162336f2fce262c45ac23'
            },
            {
                product_type: 2,
                coffee_flavor: 4,
                pack_size: 5
            },
            {
                product_type: 2,
                coffee_flavor: 4,
                pack_size: 7
            },
            {
                product_type: 2,
                coffee_flavor: 5,
                pack_size: 1,
                sku_id: '5f2162336f2fce262c45ac24'
            },
            {
                product_type: 2,
                coffee_flavor: 5,
                pack_size: 3,
                sku_id: '5f2162336f2fce262c45ac25'
            },
            {
                product_type: 2,
                coffee_flavor: 5,
                pack_size: 5
            },
            {
                product_type: 2,
                coffee_flavor: 5,
                pack_size: 7
            },
            {
                product_type: 3,
                coffee_flavor: 1,
                pack_size: 1
            },
            {
                product_type: 3,
                coffee_flavor: 1,
                pack_size: 3,
                sku_id: '5f2162336f2fce262c45ac30'
            },
            {
                product_type: 3,
                coffee_flavor: 1,
                pack_size: 5,
                sku_id: '5f2162336f2fce262c45ac31'
            },
            {
                product_type: 3,
                coffee_flavor: 1,
                pack_size: 7,
                sku_id: '5f2162336f2fce262c45ac32'
            },
            {
                product_type: 3,
                coffee_flavor: 2,
                pack_size: 1
            },
            {
                product_type: 3,
                coffee_flavor: 2,
                pack_size: 3,
                sku_id: '5f2162336f2fce262c45ac33'
            },
            {
                product_type: 3,
                coffee_flavor: 2,
                pack_size: 5,
                sku_id: '5f2162336f2fce262c45ac34'
            },
            {
                product_type: 3,
                coffee_flavor: 2,
                pack_size: 7,
                sku_id: '5f2162336f2fce262c45ac35'
            },
            {
                product_type: 3,
                coffee_flavor: 3,
                pack_size: 1
            },
            {
                product_type: 3,
                coffee_flavor: 3,
                pack_size: 3
            },
            {
                product_type: 3,
                coffee_flavor: 3,
                pack_size: 5
            },
            {
                product_type: 3,
                coffee_flavor: 3,
                pack_size: 7
            },
            {
                product_type: 3,
                coffee_flavor: 4,
                pack_size: 1
            },
            {
                product_type: 3,
                coffee_flavor: 4,
                pack_size: 3
            },
            {
                product_type: 3,
                coffee_flavor: 4,
                pack_size: 5
            },
            {
                product_type: 3,
                coffee_flavor: 4,
                pack_size: 7
            },
            {
                product_type: 3,
                coffee_flavor: 5,
                pack_size: 1
            },
            {
                product_type: 3,
                coffee_flavor: 5,
                pack_size: 3
            },
            {
                product_type: 3,
                coffee_flavor: 5,
                pack_size: 5
            },
            {
                product_type: 3,
                coffee_flavor: 5,
                pack_size: 7
            }
        ]);
    }
}

SeedingProductType();

module.exports = CoffePod;
