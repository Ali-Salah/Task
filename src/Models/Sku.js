const mongoose = require('mongoose');
const skuSchema = require('../Schemas/skuSchema');

const SKU = mongoose.model('SKU', skuSchema);

async function SeedingSKU() {
    const count = await SKU.countDocuments();
    if (!count) {
        SKU.insertMany([
            {
                sku: 'CM101'
            },
            {
                sku: 'CM102'
            },
            {
                sku: 'CM103'
            },
            {
                sku: 'CM001'
            },
            {
                sku: 'CM002'
            },
            {
                sku: 'CM003'
            },

            {
                sku: 'EM001'
            },
            {
                sku: 'EM002'
            },
            {
                sku: 'EM003'
            }
        ]);
    }
}

SeedingSKU();

async function AddingPodsSKU() {
    SKU.insertMany([
        {
            sku: 'CP001'
        },
        {
            sku: 'CP003'
        },
        {
            sku: 'CP011'
        },
        {
            sku: 'CP013'
        },
        {
            sku: 'CP021'
        },
        {
            sku: 'CP023'
        },

        {
            sku: 'CP031'
        },
        {
            sku: 'CP033'
        },
        {
            sku: 'CP041'
        },
        {
            sku: 'CP043'
        },
        {
            sku: 'CP101'
        },
        {
            sku: 'CP103'
        },
        {
            sku: 'CP111'
        },

        {
            sku: 'CP113'
        },
        {
            sku: 'CP121'
        },
        {
            sku: 'CP123'
        },
        {
            sku: 'CP131'
        },
        {
            sku: 'CP133'
        },
        {
            sku: 'CP141'
        },

        {
            sku: 'CP143'
        },
        {
            sku: 'EP003'
        },
        {
            sku: 'EP005'
        },
        {
            sku: 'EP007'
        },
        {
            sku: 'EP013'
        },
        {
            sku: 'EP015'
        },
        {
            sku: 'EP017'
        }
    ]);
}

// AddingPodsSKU();

module.exports = SKU;
