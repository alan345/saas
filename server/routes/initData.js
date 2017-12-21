var express     = require('express'),
    router      = express.Router(),
    crypto      = require("crypto"),
    nodemailer  = require('nodemailer'),
    async       = require('async'),
    Quote = require('../models/quote.model'),
    passwordHash = require('password-hash'),
    sgTransport = require('nodemailer-sendgrid-transport'),
    config      = require('../config/config');


module.exports = {
  initCompanie (companie) {
    return new Promise(function(resolve, reject) {
      console.log(companie)

      
    })
  }


}
