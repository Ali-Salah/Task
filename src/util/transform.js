const _ = require('lodash');

class Transformation {
    toBoolen(value) {
        if (value > 1 || value < 0)
            throw new Error('Wrong Choice for a boolen value');
        else if (value != undefined) {
            const boolen = value != 0;
            return boolen;
        }
        return null;
    }

    mapSKU(values) {
        return _.map(values, doc => {
            return doc.sku_id.sku;
        });
    }
}

module.exports = Transformation;
