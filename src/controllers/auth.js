const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Admin = require('../models/admin');
const config = require('../config');

exports.createAdmin = (req, res) => {
  bcrypt.hash(req.body.password, 10).then((hash) => {
    const admin = new Admin({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hash,
      createdDate: req.body.createdDate,
    });
    admin.save()
      .then(() => {
        res.status(201).json({
          status: 'success',
          data: {
            message: 'Admin added successfully!',
          },
        });
      })
      .catch((error) => {
        res.status(500).json({
          error,
        });
      });
  });
};

exports.adminLogin = (req, res) => {
  Admin.findOne({ email: req.body.email })
    .then((admin) => {
      if (!admin) {
        return res.status(401).json({
          error: new Error('User not found!'),
        });
      }
      bcrypt.compare(req.body.password, admin.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({
              error: new Error('Incorrect password!'),
            });
          }
          const token = jwt.sign({ adminId: admin.id }, config.secretKey, {
            expiresIn: '24h',
          });
          res.status(200).json({
            adminId: admin.id,
            token,
          });
        })
        .catch((error) => {
          res.status(500).json({
            error,
          });
        });
    })
    .catch((error) => {
      res.status(500).json({
        error,
      });
    });
};
