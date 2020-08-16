const express = require('express');

const router = express.Router();

const errorControl = require('../controllers');

router.get('/', errorControl); // Get partners
router.patch('/:id', errorControl); // update partner
router.delete('/:id', errorControl); // delete partner
router.get('/:id', errorControl); // get one partner

module.exports = router;
