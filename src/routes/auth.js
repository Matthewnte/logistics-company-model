const express = require('express');

const router = express.Router();

const authCtrl = require('../controllers/auth');

// admin
router.post('/create-admin', authCtrl.createAdmin); // admin signup
router.post('/admin/login', authCtrl.adminLogin); // admin login

// authenticate rider
// router.post('/rider/signup', authCtrl.riderSignup); // rider signup
// router.post('/rider/login', authCtrl.riderLogin); // login rider

// // register partners
// router.post('/create-partner', authCtrl.createPartner); // create a partner
// router.post('/partner/login', authCtrl.partnerLogin); // partner login

module.exports = router;
