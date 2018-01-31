import { Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { User } from '../../user/user.model';
import { GlobalEventsManager } from '../../globalEventsManager';
// import { AdminService } from '../../admin/services/admin.service';
// import { UserService } from '../../user/user.service';
// import { PaiementGuardService } from '../../companie/single/paiement/paiementGuard.service'
// import { ChangeDetectionStrategy } from '@angular/core';
// import { NotificationService } from '../../notification/notification.service';
// import { Notification } from '../../notification/notification.model';
// import { Observable } from 'rxjs/Rx';
// import { NotificationDialogComponent } from '../../notification/single/dialog/notificationDialog.component';
// import { ListNewObjDialogComponent } from './newObj/dialog/listNewObjDialog.component'


// import { MatDialog } from '@angular/material';



@Component({
  selector: 'app-navbar',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // @Input() sidenav: any;
  // @Input() widthContainer = 0;
  showNavBar = false;
  showSideNavBar = false;
  showBackButton = false;
  // private userId: string = localStorage.getItem('userId');
  // private userId: string;
  fetchedUser: User = new User();
  // fetchedNotifications: Notification[] = [];
  // notificationsNotRead = 0;
  dialogRef: any

  constructor(
    private globalEventsManager: GlobalEventsManager,
    private authService: AuthService,
    private location: Location,
    // private adminService: AdminService,
    // private notificationService: NotificationService,
    // public mdDialog: MatDialog,
    // private userService: UserService,
    private router: Router,
    // private paiementGuardService: PaiementGuardService,
  ) {
    this.globalEventsManager.showTopNavBarEmitter.subscribe((mode) => {
      // mode will be null the first time it is created, so you need to igonore it when null
      if (mode !== null) {
        this.showNavBar = mode;
        this.fetchedUser = this.authService.getCurrentUser()
      }
    });
    this.globalEventsManager.showNavBarEmitter.subscribe((mode) => {
        if (mode !== null) {
          this.showSideNavBar = mode;
        }
    });
    this.globalEventsManager.showBackButtonEmitter.subscribe((mode) => {
        if (mode !== null) {
          if(mode === 1) {
            this.showBackButton = true;
          }
          if(mode === -1) {
            this.showBackButton = false;
          }
        }
    });
  }

  goBack() {
    // console.log(this.location)
    this.location.back();
  }

  newQuote(){
    this.router.navigate(['/quote/new']);
  }
  toggleSideBar() {
    this.globalEventsManager.showNavBar(!this.showSideNavBar);
  }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      //let userId = localStorage.getItem('userId');

      // this.getNotifications(1, {})
      // Observable.interval(1000 * 30).subscribe(x => {
      //   this.getNotifications(1, {})
      // });
      // let this2=this
      // setTimeout(function () {
      //     this2.globalEventsManager.showNavBar(true);
      // }, 2000);
      // console.log(this.sidenav.mode)

      this.globalEventsManager.showTopNavBar(true);
      this.showNavBar = true;
      this.fetchedUser = this.authService.getCurrentUser()
    }
  }
  // cleanNotifications() {
  //   this.notificationsNotRead = 0
  // }
  // getNotifications(page: number, search: any) {
  //   this.notificationService.getNotifications(page, search)
  //     .subscribe(
  //     res => {
  //       this.fetchedNotifications = res.data
  //       this.notificationsNotRead = 0
  //       this.fetchedNotifications.forEach(notif => {
  //         if (notif.isRead === false) {
  //           this.notificationsNotRead++
  //         }
  //       })
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //     );
  // }
  //
  // openNotifDialog() {
  //   if (this.dialogRef) {
  //     this.dialogRef.close();
  //     this.dialogRef = undefined
  //   } else {
  //     this.cleanNotifications();
  //     this.dialogRef = this.mdDialog.open(NotificationDialogComponent, {
  //       height: '200px',
  //       width: '300px',
  //       position: {
  //         top: "60px",
  //         right: "80px",
  //       },
  //       data: {
  //         // search: this.search
  //       }
  //     });
  //
  //     this.dialogRef.afterClosed().subscribe(result => {
  //       // this.saved.emit(result)
  //     })
  //   }
  // }

  openNewObejcts() {
    // if (this.dialogRef) {
    //   this.dialogRef.close();
    //   this.dialogRef = undefined
    // } else {
    //   this.dialogRef = this.mdDialog.open(ListNewObjDialogComponent, {
    //     height: '165px',
    //     width: '300px',
    //     id: 'ListNewObjDialogComponent',
    //     position: {
    //       top: "60px",
    //       right: "60px",
    //     },
    //     data: {
    //       // search: this.search
    //     }
    //   });
    //
    //
    //   this.dialogRef.afterClosed().subscribe(result => {
    //     // this.saved.emit(result)
    //   })
    // }



  }



  // isCurrentUserIsInSubPeriod(){
  //   return this.userService.isCurrentUserIsInSubPeriod()
  // }

  // isCurrentUserIsInSubPeriod(){
  //   // console.log('aa')
  //   //return true;
  //   return this.authService.isCurrentUserIsInSubPeriod()
  // }
  // isCurrentUserHasCompanie(){
  //   // console.log('bb')
  //   // return true;
  //   return this.authService.isCurrentUserHasCompanie()
  // }


  // getUser(id: string) {
  //
  //   this.fetchedUser = this.authService.getCurrentUser()
  //   console.log(this.fetchedUser)
  //   // let this2 = this
  //   // setTimeout(function(){
  //   //     this2.fetchedUser = this2.authService.getCurrentUser()
  //   // }, 2000);
  //
  //   // this.userService.getUser(id)
  //   //   .subscribe(
  //   //     res => { this.fetchedUser = res },
  //   //     error => { console.log(error) }
  //   //   )
  // }

  // isCurrentUserIsInSubPeriod() {
  //   return this.authService.isCurrentUserIsInSubPeriod()
  // }
  // showObjHTML(nameObject, typeAccess) {
  //   return this.authService.showObjHTML(nameObject, typeAccess)
  // }
  // isCurentUserHasAccess(nameObject, typeAccess) {
  //   return this.authService.isCurentUserHasAccess(nameObject, typeAccess);
  // }

  // check if user is logged in by asking our authentication service, we use this function in html file *ngIf directive
  isLoggedIn() {

    return this.authService.isLoggedIn();
  }

  // this calls the logout function from our authentication service, it's activated when user clicks logout in front end.
  // It's called by the (click)='logout()' when the user presses the button
  // logout() {
  //
  //   this.authService.logout();
  //   let this2 = this
  //   setTimeout(function() {
  //     this2.router.navigate(['/user/login']);
  //   }, 150);
  //
  // }
  // sideNavOpen(){
  //   //this.sidenav.open()
  //   this.sidenav.toggle()
  // }

}
