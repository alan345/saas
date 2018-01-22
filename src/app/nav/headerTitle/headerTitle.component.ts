import {Component, OnInit, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import { Search} from '../../shared/shared.model';
import { GlobalEventsManager } from '../../globalEventsManager';
// import {AuthService} from '../../auth/auth.service';
// import { Location } from '@angular/common';
// import { Router} from '@angular/router';
// import { TranslateService } from '../../translate/translate.service';

@Component({
  selector: 'app-header-title',
  templateUrl: './headerTitle.component.html',
  styleUrls: ['./headerTitle.component.css']
})
export class HeaderTitleComponent implements OnInit, OnChanges {
  @Input() title = '';
  @Input() isDialog = false;
  @Input() icon = '';
  @Input() typeObj = '';
  @Input() showBack = 0;
  @Input() createNewButton = true;
  @Input() search: Search = new Search();
  @Output() saved: EventEmitter<any> = new EventEmitter();

// <app-new-obj-dialog [search]="search" (saved)="saved($event)" [typeObj]="'paiementQuote'"></app-new-obj-dialog>


  constructor(
    private globalEventsManager: GlobalEventsManager,
    // private location: Location,
  ) {}

  ngOnChanges() {
    // if (this.showBack === 1) {
    if(!this.isDialog) {
      this.globalEventsManager.showBackButton(this.showBack);
    }
      // this.globalEventsManager.showBackButton(false);
    // }
  }
  ngOnInit() {
    // console.log('aa')
    // if (this.showBack) {
    //   this.globalEventsManager.showBackButton(true);
    // } else {
    //   this.globalEventsManager.showBackButton(false);
    // }
  }
  // goBack() {
  //   this.location.back();
  // }
  savedEmit(result) {
    this.saved.emit(result)
  }


}
