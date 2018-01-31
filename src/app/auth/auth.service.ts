import { Injectable } from '@angular/core';
import { UserAuth } from './user.model';
import { Observable } from 'rxjs/Observable';
import { Response, Headers, Http } from '@angular/http';
import 'rxjs/operator/map';
import 'rxjs/operator/catch';
import { ToastsManager } from 'ng2-toastr';
import { Error2Service } from '../errorHandler/error2.service';
import { Reset } from './resetPassword';
import { tokenNotExpired } from 'angular2-jwt';
import { JwtHelper } from 'angular2-jwt';
import { User } from '../user/user.model';
import { GlobalEventsManager } from '../globalEventsManager';
import { Config } from '../shared/config.model';
// import {UserService} from '../user/user.service'
// import { Router } from '@angular/router';


@Injectable()

export class AuthService {
  private url = Config.backendURL;
  private isMobileSizeScreen = false;
  public token: string;
  public langParam = 'fr';
  public currentUser = {
    userId: '',
    token: '',
    // user: {}
    //  companieId:[]

  }
  jwtHelper: JwtHelper = new JwtHelper();
  //public userId: string;
  user: User

  constructor(
    private http: Http,
    private error2Service: Error2Service,
    private toastr: ToastsManager,
    private globalEventsManager: GlobalEventsManager,
    // private router: Router,
    // private userService: UserService,
  ) {

    this.user = localStorage.getItem('id_token') ? this.jwtHelper.decodeToken(localStorage.getItem('id_token')).user : null;

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
    this.currentUser = currentUser;


    this.globalEventsManager.isMobileSizeScreenEmitter.subscribe((mode) => {
      if (mode !== null) {
        // console.log(mode)
        this.isMobileSizeScreen = mode;
      }
    });

  }

  // sending request to back end to register our user
  signup(user: UserAuth) {
    const body = JSON.stringify(user);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.url + 'user/register', body, { headers: headers })
      .map(response => response.json())
      .catch((error: Response) => {
        this.error2Service.handleError(error.json());
        return Observable.throw(error.json());
      });
  }

  // sending request to back end to login the user
  signin(user: UserAuth) {
    const body = JSON.stringify(user);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.url + 'user/login', body, { headers: headers })
      .map((response: Response) => {
        const token = response.json() && response.json().token;
        const userId = response.json() && response.json().userId;
        // let user = response.json() && response.json().user;
        if (token) {

          const currentUser = {
            userId: userId,
            token: token,
            // user: user
          }


          this.token = token
          this.currentUser = currentUser
          this.user = this.jwtHelper.decodeToken(token).user
          if (!this.isMobileSizeScreen) {
            setTimeout(() => this.globalEventsManager.showNavBar(true), 700)
          }
          //  console.log(this.currentUser)
          // console.log(this.user)
          localStorage.setItem('currentUser', JSON.stringify(currentUser))
        }

        // let id_token = response.json() && response.json().token;
        // let userId = response.json() && response.json().userId;
        // this.id_token = id_token
        // this.userId = userId
        //
        //
        //console.log(response)
        return response.json()
      })
      .catch((error: Response) => {
        this.error2Service.handleError(error.json());
        return Observable.throw(error.json());
      });
  }

  successNotif(message: string) {
    this.toastr.success('')
  }
  //
  // refreshCookiesOfCurrentUser() {
  //   console.log('refreshCookiesOfCurrentUser')
  //
  //
  //   this.getUser('')
  //     .subscribe(
  //       res => {
  //         this.user = res
  //          console.log(res)
  //        },
  //       error => { console.log(error) }
  //     )
  //
  //
  // }


  //
  // getUser(id: string) {
  //   let headers = new Headers({'Content-Type': 'application/json'});
  //   headers.append('Authorization', '' + this.currentUser.token);
  //   return this.http.get(this.url + 'profile/' + id, {headers: headers})
  //     .map((response: Response) => {
  //       return response.json().user;
  //     })
  //     .catch((error: Response) => {
  //       this.error2Service.handleError(error.json());
  //       return Observable.throw(error.json());
  //     });
  // }


  // isAdmin() {
  //   // let userInfo = localStorage.getItem('id_token') ? this.jwtHelper.decodeToken(localStorage.getItem('id_token')) : null;
  //   // if (this.user) {
  //   //   if (this.user.role[0] === 'admin') {
  //   //     return true;
  //   //   }
  //   // }
  //   // return false;
  // }




  getCurrentUser() {
    // console.log(localStorage.getItem('id_token') )
    // let userInfo = localStorage.getItem('id_token') ? this.jwtHelper.decodeToken(localStorage.getItem('id_token')) : null;
    // console.log(this.user)
    return this.user
    // return userInfo
    // if (userInfo) {
    //   if (userInfo.user.role[0] === 'admin') {
    //     return true;
    //   }
    // }
    // return false;
  }

  setLangParam(langParam: string) {
    this.langParam = langParam
  }


  getLanguage() {
    if (!this.user) {
      return this.langParam
    }
    return this.user.profile.language
  }

  getUserPlan() {
    // let userInfo = localStorage.getItem('id_token') ? this.jwtHelper.decodeToken(localStorage.getItem('id_token')) : null;
    // return this.user.paiement.stripe.plan

    let plan = ''
    this.user.ownerCompanies.forEach(companie => {
      plan = companie.planDetail.plan

    });
    // let userInfo = localStorage.getItem('id_token') ? this.jwtHelper.decodeToken(localStorage.getItem('id_token')) : null;
    return plan

  }
  isCurrentUserIsInSubPeriod() {
    // console.log(this.user)
    // return true

    let itemFounded = false
    this.user.ownerCompanies.forEach(companie => {
      if (new Date(companie.planDetail.current_period_end) > new Date())
        itemFounded = true
    });

    return itemFounded
  }
  isCurrentUserHasCompanie() {
    // console.log(this.user)
    // let userInfo = localStorage.getItem('id_token') ? this.jwtHelper.decodeToken(localStorage.getItem('id_token')) : null;
    if (this.user.ownerCompanies.length) {
      return true
    }
    return false
  }

  getRightsToUse() {
    if (this.user.rights.length) {
      return this.user.rights
    } else {
      return this.user.rightsInApp
    }
  }

  isCurentUserHasAccess(nameObject, typeAccess) {

    // if(this.user.isAdminOfHisCompanie)
    //   return true
    // if(!this.user.rights.length)
    //   return true


    // let rightCheck = this.user.rights.some(right => {
    //   return right.detailRight.permissions.some(permission => {
    //     if(permission.namePermission === nameObject)
    //       return permission.access.some(access => {
    //         return access.typeAccess === typeAccess
    //       })
    //   })
    // })
    // console.log(this.user)
    // let rightsInAppCheck: any


    // let rightToUse: any
    // if (this.user.rights.length) {
    //   rightToUse = this.user.rights
    // } else {
    //   rightToUse = this.user.rightsInApp
    // }
    // console.log(this.user.rightsInApp)
    return this.user.rightsInApp.some(right => {
      return right.detailRight.permissions.some(permission => {
        if (permission.namePermission === nameObject) {
          return permission.access.some(access => {
            return access.typeAccess === typeAccess;
          })
        }
      })
    })

    // return rightsInAppCheck


  }

  showObjHTML(nameObject, typeAccess) {
    // let typeAccess = 'read'
    // console.log(this.isCurentUserHasAccess(nameObject, typeAccess))
    // console.log(this.isCurrentUserIsInSubPeriod())
    // console.log(this.isCurrentUserHasCompanie())

    if (this.user.isExternalUser) {
      if ( this.isCurentUserHasAccess(nameObject, typeAccess)) {
        return true
      }
    } else {
      if (nameObject === 'settings' && typeAccess === 'read') {
        return true;
      }
      if (
        this.isCurentUserHasAccess(nameObject, typeAccess)
        && this.isCurrentUserIsInSubPeriod()
        // && this.isCurrentUserHasCompanie()
      ) {
        return true
      }
    }
  }

  // isCurrentUserIsInSubPeriod(){
  //   if (new Date(this.currentUser.paiement.stripe.current_period_end) > new Date())
  //     return true;
  //   return false
  //
  // }
  // isCurrentUserHasCompanie(){
  //   if(this.currentUser.companies.length)
  //     return true
  //   return false
  // }

  // isStylist() {
  //   let userInfo = localStorage.getItem('id_token') ? this.jwtHelper.decodeToken(localStorage.getItem('id_token')) : null;
  //   if (userInfo) {
  //     if (userInfo.user.role[0] === 'stylist') {
  //       return true;
  //     }
  //   }
  //   return false;
  // }
  // isSalesRep() {
  //   let userInfo = localStorage.getItem('id_token') ? this.jwtHelper.decodeToken(localStorage.getItem('id_token')) : null;
  //   if (userInfo) {
  //     if (userInfo.user.role[0] === 'salesRep') {
  //       return true;
  //     }
  //   }
  //   return false;
  // }
  //
  // isManager(){
  //   let userInfo = localStorage.getItem('id_token') ? this.jwtHelper.decodeToken(localStorage.getItem('id_token')) : null;
  //   if (userInfo) {
  //     if (userInfo.user.role[0] === 'manager') {
  //       return true;
  //     }
  //   }
  //   return false;
  // }

  // sending request for password reset
  forget(reset: Reset) {
    const body = JSON.stringify(reset);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('/user/forgot', body, { headers: headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => {
        this.error2Service.handleError(error.json());
        return Observable.throw(error.json());
      });
  }

  // sending request with the newly created password
  reset(reset: Reset) {
    const body = JSON.stringify(reset);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('/user/reset/' + reset.token, body, { headers: headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => {
        this.error2Service.handleError(error.json());
        return Observable.throw(error.json());
      });
  }

  // logout function to be used in html file of both pages (login/register) in order to clear the localStorage from token and user id.
  logout() {
    this.globalEventsManager.isLoggedIn(false);
    this.globalEventsManager.showNavBar(false);
    this.globalEventsManager.showTopNavBar(false);


    localStorage.clear();
    this.token = null;

    // this.router.navigate(['user/login']);
    //gooplus
    //location.reload();

    this.toastr.info('Ok!');
  }

  // check if the user is logged in or not, if token is expired, token is deleted from localstorage
  isLoggedIn() {
    // console.log(tokenNotExpired())

    if (!tokenNotExpired()) {
      localStorage.clear();
    } else {
      this.globalEventsManager.isLoggedIn(true);
      // this.globalEventsManager.showNavBar(true);
      this.globalEventsManager.showTopNavBar(true);
    }
    return tokenNotExpired();
  }

  //
  // HTMLDatetoIsoDate(htmlDate){
  //   let year = Number(htmlDate.toString().substring(0, 4))
  //   let month = Number(htmlDate.toString().substring(5, 7))
  //   let day = Number(htmlDate.toString().substring(8, 10))
  //   return new Date(year, month - 1, day)
  // }
  // isoDateToHtmlDate(isoDate){
  //   let date = new Date(isoDate);
  //   let dtString = ''
  //   let monthString = ''
  //   if (date.getDate() < 10) {
  //     dtString = '0' + date.getDate();
  //   } else {
  //     dtString = String(date.getDate())
  //   }
  //   if (date.getMonth()+1 < 10) {
  //     monthString = '0' + Number(date.getMonth()+1);
  //   } else {
  //     monthString = String(date.getMonth()+1);
  //   }
  //   return date.getFullYear()+'-' + monthString + '-'+dtString
  // }

}
