const express = require('express');

const router = express.Router();

const errorControl = require('../controllers');

router.get('/', errorControl); // get all riders
router.get('/:id', errorControl); // get one rider
router.get('/profile', errorControl); // get profile
router.delete('/:id', errorControl); // Delete rider
router.patch('/reset-password/:token', errorControl); // rider reset password
router.get('/confirm/:token', errorControl); // confirm rider signup
router.patch('/:id', errorControl); // update rider
router.patch('/profile-picture', errorControl); // rider upload profile picture

module.exports = router;
