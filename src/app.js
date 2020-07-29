const express = require('express');

const app = express();

// DB models initialization

require('./DB/mongoose');
require('./Models/CoffeeMachine');
require('./Models/MachineProductType');
require('./Models/PodProductType');
require('./Models/CoffePod');
require('./Models/CoffeeFlavor');
require('./Models/PackSize');
require('./Models/Sku');

const CoffeeMachineRoute = require('./Routes/CoffeeMachineRoute');
const CoffeثPodsRoute = require('./Routes/CoffeePodRoute');

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    next();
});

app.use('/api/coffeMachine', CoffeeMachineRoute);
app.use('/api/coffePods', CoffeثPodsRoute);

module.exports = app;
