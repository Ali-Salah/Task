const mongoose = require('mongoose');
const packSizeSchema = require('../Schemas/packSizeSchema');

const PackSize = mongoose.model('PackSize', packSizeSchema);

async function SeedingSizes() {
    const count = await PackSize.countDocuments();
    if (!count) {
        PackSize.insertMany([
            {
                size: 1
            },
            {
                size: 3
            },
            {
                size: 5
            },
            {
                size: 7
            }
        ]);
    }
}

SeedingSizes();

module.exports = PackSize;
