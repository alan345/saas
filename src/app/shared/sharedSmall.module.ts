import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/observable/throw';
// import { AutocompleteComponent } from '../autocomplete/autocomplete.component'
// import { AutocompleteModule } from '../autocomplete/autocomplete.module'
// import {PictureModule} from '../picture/picture.module';

// import {CommentModule} from '../comment/comment.module';

// import { TRANSLATION_PROVIDERS, TranslatePipe, TranslateService }   from '../translate';

import { RoundPipe} from './round.pipe';
import { CurrencyPipe} from './round.pipe';
import { SmallTextPipe} from './round.pipe';
import { MediumTextPipe} from './round.pipe';
// import { HeaderComponent } from '../nav/header/header.component';
// import { newObjDialogComponent } from '../nav/newObjDialog/newObjDialog.component';

// import { MaterialModule } from '@angular/material';
// import {MatInputModule} from '@angular/material';
// import { LoadingInAppComponent } from '../nav/loadingInApp/loadingInApp.component';
import { LoadingInAppModule } from '../nav/loadingInApp/loadingInApp.module';
import { LoginInAppComponent } from '../nav/loginInApp/loginInApp.component';
// import { HeaderTitleComponent } from '../nav/headerTitle/headerTitle.component';


import { TranslateModule} from '../translate/translate.module';
import { MatDialogModule} from '@angular/material';
import { MatPaginatorModule, MatPaginatorIntl} from '@angular/material';



import { MatPaginatorIntlCro } from './matPaginatorIntlCroClass'
import {MatInputModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material';
import {MatExpansionModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';

@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    // AutocompleteModule,
    // PictureModule,
    // CommentModule,
    // MaterialModule,
    MatPaginatorModule,
    MatDialogModule,

    TranslateModule,
    LoadingInAppModule,
    // MatInputModule,
    MatInputModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,


  ],
  declarations: [
    RoundPipe,
    CurrencyPipe,
    SmallTextPipe,
    MediumTextPipe,
    // AutocompleteComponent,
    // TranslatePipe,
    // HeaderComponent,
    // newObjDialogComponent,
    // LoadingInAppComponent,
    LoginInAppComponent,
    // HeaderTitleComponent,


  ],
  exports: [
    // TranslatePipe,
    // AutocompleteModule,
    CommonModule,
    FormsModule,
    RoundPipe,
    CurrencyPipe,
    SmallTextPipe,
    MediumTextPipe,


    MatDialogModule,
    // MatInputModule,
    // HeaderComponent,
    // newObjDialogComponent,
    // LoadingComponent,

    // LoadingInAppComponent,
    LoginInAppComponent,
    // HeaderTitleComponent,
    LoadingInAppModule,
    MatSelectModule,
    // PictureModule,
    // MaterialModule,
    MatPaginatorModule,
    TranslateModule,
    MatInputModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    // CommentModule,
    // AutocompleteComponent,
  ],
  providers: [
    { provide: MatPaginatorIntl, useClass: MatPaginatorIntlCro}
    // TRANSLATION_PROVIDERS,
    // TranslateService,
  ]
})
export class SharedSmallModule { }
