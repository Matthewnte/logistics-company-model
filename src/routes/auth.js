const express = require('express');

const router = express.Router();

const errorControl = require('../controllers');

// admin
router.post('/create-admin', errorControl); // admin signup
router.post('/admin/login', errorControl); // admin login

// authenticate rider
router.post('/rider/signup', errorControl); // rider signup
router.post('/rider/login', errorControl); // login rider

// register partners
router.post('/create-partner', errorControl); // create a partner
router.post('/partner/login', errorControl); // partner login

module.exports = router;
