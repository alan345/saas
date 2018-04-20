var mongoose                = require('mongoose'),
    Schema                  = mongoose.Schema,
    mongooseUniqueValidator = require('mongoose-unique-validator');

// var user = require('../models/user.model').user;
// var User = require('../models/user.model').User;
var userLight = require('../models/user.model').userLight;

var notification = new Schema({
  //  _id: String,
    ownerCompanies: [{type: Schema.Types.ObjectId, ref: 'Companie'}],
    quotes: [{type: Schema.Types.ObjectId, ref: 'Quote'}],
    // userCalendars: [{type: Schema.Types.ObjectId, ref: 'UserCalendar'}],
    // user : userLight,
    isRead: {type: Boolean, default: false},
    amount: {type: Number, default: 0},
    // name: {type: String, default: ['']},
    // typeObject: {type: String, default: ['']},
    date: {type: Date, default: [Date()]},
    message: {type: String, default: ['']},
    currency: {type: String, default: ['']},
    user: userLight,


  },
  {
    timestamps: true
  });

notification.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Notification', notification);
