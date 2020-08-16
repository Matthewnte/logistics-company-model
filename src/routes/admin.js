const express = require('express');

const router = express.Router();

const errorControl = require('../controllers');

router.get('/', errorControl); // get all admins
router.get('/:id', errorControl); // get one admin
router.delete('/:id', errorControl); // delete an admin
router.get('/profile', errorControl); // get admin profile
router.patch('/:id', errorControl); // update an admin

module.exports = router;
