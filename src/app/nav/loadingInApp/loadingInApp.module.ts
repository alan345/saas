import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { LoadingInAppComponent} from './loadingInApp.component';
import {MatProgressSpinnerModule} from '@angular/material';
// import { FormsModule, ReactiveFormsModule} from '@angular/forms';
// import { MaterialModule } from '@angular/material';
// import { ListNewObjComponent} from './newObj/listNewObj.component';
// import {SharedModule } from '../../shared/shared.module';
// import { NotificationService} from '../../notification/notification.service';
// import {NotificationModule} from '../../notification/notification.module';
// import {ListNewObjDialogComponent} from './newObj/dialog/listNewObjDialog.component'

@NgModule({
  imports:      [
    // ProductRouting,
    RouterModule,
    CommonModule,
    MatProgressSpinnerModule,
    // FormsModule,
    // ReactiveFormsModule,
    // SharedModule,
    // NotificationModule,
    //  FormsModule,
    // MaterialModule,
    // ReactiveFormsModule,

  ],
  declarations: [

    LoadingInAppComponent,
    // ListNewObjComponent,
    // ListNewObjDialogComponent,
    // ProductsComponent,
    // ProductSingleComponent,
  ],
  exports:      [
    LoadingInAppComponent,
    // ListNewObjComponent,
    // ProductsComponent
  ],
  providers:    [
    // NotificationService,
    // ProductService
  ],
  entryComponents: [
  // ListNewObjDialogComponent
  ]
})
export class LoadingInAppModule { }
