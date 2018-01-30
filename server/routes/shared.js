var Notification = require('../models/notification.model'),
    User = require('../models/user.model'),
    TypeRights = require('../models/typeRights.const')


module.exports = {

  getRight (user) {
    // console.log(user)
        let typesRightToUse = []
        // console.log(user)

        if (user.isExternalUser) {
          typesRightToUse = TypeRights.externalUserRights
        } else {
          // console.log('aa')
          // console.log(TypeRights.newInternalUserRights)
          // typesRightToUse = TypeRights.newInternalUserRights
        }
        user.ownerCompanies.forEach(companie => {
          if(companie.planDetail.plan === 'gold') typesRightToUse = TypeRights.gold
          if(companie.planDetail.plan === 'equipe') typesRightToUse = TypeRights.gold
          if(companie.planDetail.plan === 'silver') typesRightToUse = TypeRights.silver
          if(companie.planDetail.plan === 'artisan') typesRightToUse = TypeRights.silver
          if(companie.planDetail.plan === '') typesRightToUse = TypeRights.default
        })

        var permissionGooplus = []
        typesRightToUse.forEach(typesRight => {
          let newPermission = {
            namePermission: typesRight.value,
            access: []
          }
          typesRight.typeAccess.forEach(typeAccessSingle => {
            let newAccess = {
              typeAccess: typeAccessSingle.value
            }
            newPermission.access.push(newAccess)
          })
          permissionGooplus.push(newPermission)
        })
        let rightToReturn = {
          detailRight: {
            nameRight: '',
            permissions: permissionGooplus
          }
        }
        return rightToReturn

  },

  isCurentUserHasAccess (user, nameObject, typeAccess) {
    // console.log(user, nameObject, typeAccess)
    // console.log(user.rights)
    // if (!user.rights.length)
    //   return true

    // doc.rightsInApp.push(shared.getRight(doc))
    // let rights = JSON.parse(JSON.stringify(user))
    // console.log(rights)
    // rights.forEach(right => {
    // console.log(this.getRight(user))

      // let permissionBool = false
      // this.getRight(user).detailRight.permissions.forEach(permission => {
      //   if (permission.namePermission === nameObject)
      //     permission.access.forEach(singleAccess => {
      //       if (singleAccess.typeAccess === typeAccess)
      //         permissionBool = true
      //     })
      //   })
      //   return permissionBool
      user.rightsInApp.push(this.getRight(user))


      let rightToUse = {}
      if (user.rights.length) {
        rightToUse = user.rights
      } else {
        rightToUse = user.rightsInApp
      }

      return rightToUse.some(right => {
        return right.detailRight.permissions.some(permission => {
          if (permission.namePermission === nameObject) {
            return permission.access.some(access => {
              return access.typeAccess === typeAccess;
            })
          }
        })
      })

      // return this.getRight(user).detailRight.permissions.some(permission => {
      //   if (permission.namePermission === nameObject) {
      //     return permission.access.some(access => {
      //       return access.typeAccess === typeAccess
      //     })
      //   }
      // })



  },

  // postNotification(req, typeObject) {
  //   //init new notification
  //   return new Promise((resolve, reject) => {
  //     var notification = new Notification()
  //     notification.ownerCompanies = req.user.ownerCompanies
  //     notification.nameNotification = 'New Update ' + typeObject + ' ' + req.params.id
  //     notification.typeObject = typeObject
  //     notification.quotes = [req.params.id]
  //
  //     let searchQuery = {}
  //     searchQuery['ownerCompanies'] = req.user.ownerCompanies
  //     User.find(searchQuery).populate({path: 'rights', model: 'Right'}).exec(function(err, item) {
  //       if (err) {
  //         reject(err)
  //         // return res.status(404).json({message: 'No results', err: err})
  //       } else {
  //         // add users with the 'notification right'
  //         item.forEach(user => {
  //           if (shared.isCurentUserHasAccess(user, typeObject, 'notification')) {
  //             notification.users.push(user)
  //           }
  //         })
  //         // add user owner of typeObject
  //         if (typeObject === 'quote') {
  //           req.body.projects.forEach(project => {
  //             project.assignedTos.forEach(user => {
  //               notification.users.push(user)
  //             })
  //           })
  //         }
  //         if (typeObject === 'userCalendar') {
  //           req.body.clients.forEach(client => {
  //             notification.users.push(client)
  //           })
  //         }
  //
  //         //remove duplicate
  //         notification.users = Array.from(new Set(JSON.parse(JSON.stringify(notification.users))))
  //
  //         // save in DB
  //         notification.save(function(err, result2) {
  //           if (err) {
  //             // console.log(err)
  //             // return res.status(403).json({
  //             //   title: 'There was an issue',
  //             //   error: {
  //             //     message: 'Error'
  //             //   }
  //             // })
  //           }
  //           // res.status(200).json({message: 'Ok', obj: 'ok'})
  //           resolve(result2)
  //         })
  //
  //       }
  //     })
  //   })
  // }

}
