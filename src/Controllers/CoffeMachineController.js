const status = require('http-status-codes');

const CoffeMachine = require('../Models/CoffeeMachine');
const Transformation = require('../util/transform');

const _transofrm = new Transformation();

const filter = async (req, res) => {
    try {
        const { productType, waterLine } = req.query;
        const $query = {};

        if (waterLine)
            $query.water_line_compatible = _transofrm.toBoolen(waterLine);
        if (productType) $query.product_type = productType;

        const data = await CoffeMachine.find($query)
            .populate({
                path: 'machineTypeRelation',
                match: { type_id: 'product_type' }
            })
            .populate({ path: 'sku_id' })
            .lean();

        const machines = _transofrm.mapSKU(data);
        return res.status(status.OK).send(machines);
    } catch (e) {
        return res.status(status.INTERNAL_SERVER_ERROR).send(e.message);
    }
};

module.exports = {
    filter
};
