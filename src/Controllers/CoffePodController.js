const status = require('http-status-codes');

const CoffeePod = require('../Models/CoffePod');
const Transformation = require('../util/transform');

const _transofrm = new Transformation();

const filter = async (req, res) => {
    try {
        const { productType, flavor, packSize } = req.query;
        const $query = {};
        if (productType) $query.product_type = productType;
        if (flavor) $query.coffee_flavor = flavor;
        if (packSize) $query.pack_size = packSize;

        const data = await CoffeePod.find($query)
            .populate({
                path: 'podsTypeRelation',
                match: { type_id: 'product_type' }
            })
            .populate({
                path: 'podsFlavorRelation',
                match: { flavor_id: 'coffee_flavor' }
            })
            .populate({
                path: 'podsSizeRelation',
                match: { size: 'pack_size' }
            })
            .populate({ path: 'sku_id' });

        const pods = _transofrm.mapSKU(data);
        return res.status(status.OK).send(pods);
    } catch (e) {
        return res.status(status.INTERNAL_SERVER_ERROR).send(e.message);
    }
};

module.exports = {
    filter
};
