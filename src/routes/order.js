const express = require('express');

const router = express.Router();

const errorControl = require('../controllers');

router.post('/create', errorControl); // create an order request

router.get('/', errorControl); // get all orders

router.get('/:id', errorControl); // get one order

router.post('/:id/accept', errorControl); // accept request

router.get('/:id/track', errorControl); // user can track order

router.post('/delievered/:id', errorControl); // order delievered

router.post('/complete/:id', errorControl); // order completed

router.delete('/:id', errorControl); // order deleted

module.exports = router;
