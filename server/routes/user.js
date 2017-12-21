var express = require('express'),
  router = express.Router(),
  passwordHash = require('password-hash'),
  jwt = require('jsonwebtoken'),
  config = require('../config/config'),
  fs = require('fs'),
  multer = require('multer'),
  mime = require('mime'),
  path = require('path'),
  crypto = require("crypto"),
  gm = require('gm').subClass({imageMagick: true}),
  Companie = require('../models/companie.model'),
  User = require('../models/user.model'),
  shared = require('./shared.js'),
  initData = require('./initData.js'),
  paiement = require('./paiement.js');
// user register




router.post('/register', function(req, res, next) {

  var companie = new Companie()
  // companie.nameCompanie = 'My Companie'
  companie.save(function(err, result) {
    if (err) {
      return res.status(403).json({title: 'There was an issue', error: err});
    }

    var user = new User({
      email: req.body.email,
      password: passwordHash.generate(req.body.password),
      profile: req.body.profile,
      ownerCompanies: result._id,
      isExternalUser: false
      // companies: result._id,
      // isAdminOfHisCompanie: true,
    });
    user.save(function(err, userResult) {
      if (err) {
        return res.status(403).json({
          title: 'There was an issue',
          error: {
            message: 'The email you entered already exists'
          }
        });
      }
      initData.initCompanie(result)
      res.status(200).json({message: 'Registration Successfull', obj: userResult})
    })
  })

});

// user login
router.post('/login', function(req, res, next) {


  User
  .findOne({email: req.body.email.toLowerCase()})
  .populate({path: 'ownerCompanies', model: 'Companie'})
  .populate({path: 'rights', model: 'Right'})
  .exec(function(err, doc) {

    if (err) {
      return res.status(403).json({title: 'There was a problem', error: err});
    }
    if (!doc) {
      return res.status(403).json({
        title: 'Wrong Email or Password',
        error: {
          message: 'Please check if your password or email are correct'
        }
      })
    }
    if (!passwordHash.verify(req.body.password, doc.password)) {
      return res.status(403).json({
        title: 'You cannot log in',
        error: {
          message: 'Please check your password or email'
        }
      })
    }

    paiement.getStripeCust(doc.ownerCompanies[0])
    doc.rightsInApp.push(shared.getRight(doc))

    var token = jwt.sign({
      user: doc
    }, config.secret, {expiresIn: config.jwtExpire});
    return res.status(200).json({
      message: 'Login Successfull', token: token, userId: doc._id,
      // user: doc
    })
  })
});

module.exports = router;
