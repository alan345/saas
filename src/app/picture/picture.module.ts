import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PictureComponent } from './picture.component';
import { FormsModule } from '@angular/forms';
import {SharedSmallModule } from '../shared/sharedSmall.module';
import { FormService} from './form/form.service';
import { UserFormsComponent} from './form/list/userForms.component';
import { UserFormsListComponent} from './form/list/userFormsList.component';
import { MatTabsModule} from '@angular/material';
import {MatProgressBarModule} from '@angular/material';
import {MatTooltipModule} from '@angular/material';
import { EditOptionsComponentDialog} from './form/single/modalLibrary/modalLibrary.component';
import { FormComponent} from './form/single/form.component';

// import { UserModule} from '../user/user.module'
// import {NewUserComponent} from '../user/singleUser/newUser.component'
// import {SharedModule } from '../shared/shared.module';
// import { newObjDialogComponent } from './newObjDialog/newObjDialog.component';
// import { UserFormsUploadAndList} from './form/both/userFormsUploadAndList.component';
// import { SeePictureDialogComponent} from './form/seePictureDialog/seePictureDialog.component';
// import { MaterialModule } from '@angular/material';
// import { ProgressBarModule} from 'ng2-progress-bar';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // SharedModule,
    // UserModule,
    // MaterialModule,
    MatTabsModule,
    // ProgressBarModule,
    SharedSmallModule,
    MatProgressBarModule,
    MatTooltipModule,

  ],
  declarations: [
    PictureComponent,
    UserFormsComponent,
    UserFormsListComponent,
    // UserFormsUploadAndList,
    // SeePictureDialogComponent,
    EditOptionsComponentDialog,
    FormComponent,
    // NewUserComponent
  ],
  exports: [
    PictureComponent,

  ],
  providers: [
    FormService,
  ],
  entryComponents: [
    // SeePictureDialogComponent,
    EditOptionsComponentDialog,
  ]
})
export class PictureModule { }
