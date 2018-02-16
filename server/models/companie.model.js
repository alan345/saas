var mongoose                = require('mongoose'),
    Schema                  = mongoose.Schema,
    Form                    = require('../models/form.model'),
    User                    = require('../models/user.model'),
    mongooseUniqueValidator = require('mongoose-unique-validator');

var companie = new Schema({

    ownerCompanies: [{type: Schema.Types.ObjectId, ref: 'Companie'}],
    canBeSeenByCompanies: [{type: Schema.Types.ObjectId, ref: 'Companie'}],
    banck: {
      // serviceSelected:{type: String, default: ['']},
      stripe: {
        stripe_user_id: {type: String, default: ['']},
        stripe_user_id_gooplus:{type: String, default: ['']},
        // secretKey:{type: String, default: ['']},
      }
    },
    planDetail: {
      plan: {type: String, default: ['']},
      current_period_end:{type: Date},
      promoCode: {type: String, default: ['']},
    },



    // contactsPerson:[{
    //   contactType:{type: String, default: ['']},
    //   contactName:{type: String, default: ['']},
    //   contactFirstName:{type: String, default: ['']},
    //   contactPhoneNumber:{type: String, default: ['']},
    //   contactEmail:{type: String, default: ['']},
    // }],

    rights: [{type: Schema.Types.ObjectId, ref: 'Right'}],
    VAT : {type: String, default: ['']},
    modelVATs: [{type: Number, default: ['']}],
    legalApprovals: [{type: String, default: ['']}],
    typeInterventions: [{type: String, default: ['']}],
    // number[] = [0, 5.5, 10]

    email : {type: String, default: ['']},
    address: [{
      nameAddress: {type: String, default: ['']},
      country : {type: String, default: ['']},
      address : {type: String, default: ['']},
      city : {type: String, default: ['']},
      state : {type: String, default: ['']},
      zip : {type: String, default: ['']},
    }],
    option:{
      calendar: {
        timeBegin: {type: String, default: ['06:00:00']},
        timeEnd: {type: String, default: ['19:00:00']},
        slotDuration: {type: String, default: ['00:30:00']},
        timeBeginbusinessHours: {type: String, default: ['10:30:00']},
        timeEndbusinessHours: {type: String, default: ['17:00:00']},
        daysToHide: []
      },
      currency: {type: String, default: ['€']},
    },
    quoteSettings: {
      legalNotice: {type: String, default: ['']},
      legalNoticeInvoice: {type: String, default: ['']},
      prefixIntervention: {type: String, default: ['']},
      prefixInvoice: {type: String, default: ['']},
      prefixQuote: {type: String, default: ['']},
    },
    // faxNumber: {type: String, default: ['']},
    phoneNumber: {type: String, default: ['']},
    nameCompanie: {type: String, default: ['']},
    typeCompanie: {type: String, default: ['']},
    // typeCompanie: {type: String, default: ['salon']},
    // isSupplier: {type: Boolean, default: false},
    //users : [{type: Schema.Types.ObjectId, ref: 'User'}],
    forms: [{type: Schema.Types.ObjectId, ref: 'Form'}],
    // categJson: {
    //   categProduct:{type: String, default: ['']},
    //   categProject:{type: String, default: ['']}
    // },
    typeUsers:[{value:{type: String}}],
    categories: {
      categProduct:[{
        categ: {type: String, default: ['']},
        isFlagged: {type: Boolean, default: false},
        subCateg:[{
          categ: {type: String, default: ['']},
          subCateg:[{
            categ: {type: String, default: ['']},
          }]
        }]
      }],
      // categProject:[{
      //   categ: {type: String, default: ['']},
      //   isFlagged: {type: Boolean, default: false},
      //   subCateg:[{
      //     categ: {type: String, default: ['']},
      //     subCateg:[{
      //       categ: {type: String, default: ['']},
      //     }]
      //   }]
      // }]
    }


  },
  {
    timestamps: true
  });

companie.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Companie', companie);
