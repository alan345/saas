import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule} from '@angular/router';
import { UserCalendarDialogComponent } from './single/dialog/userCalendarDialog.component'

// import { ProjectModule} from '../project/project.module';

import { UserCalendarsComponent} from './list/userCalendars.component';
import { SearchCalendarComponent} from './list/search/searchCalendar.component';

// import { UserModule} from '../user/user.module';

import { UserCalendarComponent} from './single/userCalendar.component';


import { UserCalendarService} from './userCalendar.service';
import { UserCalendarRouting} from './userCalendarRouting.module';
// import { MaterialModule } from '@angular/material';

import { ProductModule } from '../product/product.module';
// import { AutocompleteComponent } from '../autocomplete/autocomplete.component'

import {SharedModule } from '../shared/shared.module';
// import { SignaturePadModule } from 'angular2-signaturepad';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CalendarModule} from 'ap-angular2-fullcalendar';
// import {DeleteDialog} from '../deleteDialog/deleteDialog.component'

import {MatSlideToggleModule} from '@angular/material';


@NgModule({
  imports:      [
    // ProjectModule,
    // NgbModule,
    UserCalendarRouting,
    CommonModule,
    FormsModule,
    // MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    ProductModule,
    SharedModule,
    // SignaturePadModule,
    CalendarModule,
    MatSlideToggleModule,
    // UserModule,
    // AutocompleteComponent,
  ],
  declarations: [
    UserCalendarsComponent,
    UserCalendarComponent,
    UserCalendarDialogComponent,
    SearchCalendarComponent,
    // DeleteDialog,

    // AutocompleteComponent
  ],
  exports:      [
    UserCalendarsComponent,
    UserCalendarComponent,
    SearchCalendarComponent,
    // AutocompleteComponent,
  ],
  providers:    [ UserCalendarService ],
  entryComponents: [
    UserCalendarDialogComponent,
    // DeleteDialog
  ]
})
export class UserCalendarModule { }
