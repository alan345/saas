import { Component, OnInit, Input} from '@angular/core';
import { AuthService} from '../../auth/auth.service';
import { NotificationService} from '../../notification/notification.service';
import { Notification} from '../notification.model';
import { ToastsManager} from 'ng2-toastr';
import { MatDialog} from '@angular/material';
import { Router} from '@angular/router';
import { Location} from '@angular/common';
import { UserService} from '../../user/user.service';
import { GlobalEventsManager } from '../../globalEventsManager';
import { Search, PaginationData } from '../../shared/shared.model';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['../notification.component.css'],
})
export class NotificationsComponent implements OnInit {
  @Input() search: Search = new Search();
  loading = false;
  fetchedNotifications: Notification[] = [];
  paginationData = new PaginationData();


  constructor(
    private notificationService: NotificationService,
    private authService: AuthService,
    private userService: UserService,
    private toastr: ToastsManager,
    public dialog: MatDialog,
    private router: Router,
    private location: Location,
    private globalEventsManager: GlobalEventsManager,
  ) {}

  ngOnInit() {
    this.getNotifications(this.paginationData.currentPage, this.search)
  }

  onDelete(id: string) {
    this.notificationService.deleteNotification(id)
      .subscribe(
        res => {
          this.toastr.success('Great!', res.message);
          console.log(res);
        },
        error => {
          console.log(error);
        }
      );
  }


  searchNotifications() {
    this.getNotifications(1, this.search)
  }


  getPage(page: number) {

    // this.globalEventsManager.isLoadding(true);
    this.getNotifications(page, this.search);
  }


  getNotifications(page: number, search: any) {
    this.loading = true
    this.notificationService.getNotifications(page, search)
      .subscribe(
        res => {
          this.paginationData = res.paginationData;
          this.fetchedNotifications =  res.data
          // this.globalEventsManager.isLoadding(false);
          this.loading = false
          // this.updateDateSeeLatestNotif()
        },
        error => {
          this.loading = false
          console.log(error);
        }
      );
  }

  // updateDateSeeLatestNotif() {
  //   this.userService.updateDateSeeLatestNotif(this.authService.getCurrentUser())
  //     .subscribe(
  //       res => {
  //         // console.log(res)
  //       },
  //       error => {
  //         console.log(error)
  //       }
  //     );
  // }
  //
  // isAdmin() {
  //   return this.authService.isAdmin();
  // }


}
