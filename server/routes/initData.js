var express     = require('express'),
    router      = express.Router(),
    crypto      = require("crypto"),
    nodemailer  = require('nodemailer'),
    async       = require('async'),
    Quote = require('../models/quote.model'),
    passwordHash = require('password-hash'),
    sgTransport = require('nodemailer-sendgrid-transport'),
    Companie = require('../models/companie.model'),
    config      = require('../config/config');


module.exports = {
  initCompanie (companieId) {
    console.log('initCompanie')
    console.log(companieId)
    return new Promise(function(resolve, reject) {
      // if(companie.typeCompanie === 'Plomber') {


          Companie.findById(({_id: companieId}), function (err, item) {
            console.log('momomo')
            if (err) {
              return res.status(404).json({
                message: err,
                err: err
              })
            }
            var data =''

            data =`
              L'acceptation du présent devis vaut acceptation de la réalisation et des conditions générales de ventes.

              Plus Web Agency SAS au capital de 1.200€ - N°Siret : 833 299 662 00019, immatriculée au RCS de Bourg-en-Bresse, domiciliée au 171 rue des Eycherolles, 29 le Riondel, 01210 ORNEX, représentée par Monsieur Guillaume Morelle en sa qualité de Président.

              Règlement par chèque à l'ordre de GooPlus
              Règlement par virement :
              IBAN : FR76 1009 6180 4100 0680 4100 0656 3620 218
              BIC : CMCIFRPP
            `
            item.quoteSettings.legalNotice = data

            data =`
              L'acceptation du présent devis vaut acceptation de la réalisation et des conditions générales de ventes.

              Plus Web Agency SAS au capital de 1.200€ - N°Siret : 833 299 662 00019, immatriculée au RCS de Bourg-en-Bresse, domiciliée au 171 rue des Eycherolles, 29 le Riondel, 01210 ORNEX, représentée par Monsieur Guillaume Morelle en sa qualité de Président.

              Règlement par chèque à l'ordre de GooPlus
              Règlement par virement :
              IBAN : FR76 1009 6180 4100 0680 4100 0656 3620 218
              BIC : CMCIFRPP
            `
            item.quoteSettings.legalNoticeInvoice = data

            item.legalApprovals.push(`J'accepte les conditions générales de vente et accepte l'annulation du délai de rétractation légal`)
            item.legalApprovals.push(`J'autorise la société à récupérer les déchets et le matériel usagé à la fin de la prestation`)





            item.save(function (err, result) {

              if (err) {
                reject(new Error({
                  message: 'There was an error, please try again',
                  err: err
                }));
              }
              console.log('popoiuytuio')
              console.log(result)
              resolve(result)
              })
            })
      // }
    })
  }


}
