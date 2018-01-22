import { NgModule } from '@angular/core';
import { DrawingSignatureComponent } from './drawingSignature.component';
import { FormsModule } from '@angular/forms';
import { SharedSmallModule } from '../../../shared/sharedSmall.module';
import {SharedModule } from '../../../shared/shared.module';
import {CanvasWhiteboardModule} from 'ng2-canvas-whiteboard';
// import { CommonModule } from '@angular/common';
// import { MatSliderModule} from '@angular/material';
// import { MatSlideToggleModule} from '@angular/material';
// import { SignaturePadModule } from '../angular2-signaturepad';

// import { UserModule} from '../user/user.module'
// import {NewUserComponent} from '../user/singleUser/newUser.component'
// import { newObjDialogComponent } from './newObjDialog/newObjDialog.component';

// import { FormService} from './form/form.service';
// import { UserFormsComponent} from './form/list/userForms.component';
// import { UserFormsUploadAndList} from './form/both/userFormsUploadAndList.component';
// import { SeeDrawingDialogComponent} from './form/seeDrawingDialog/seeDrawingDialog.component';

// import { EditOptionsComponentDialog} from './form/single/modalLibrary/modalLibrary.component';

// import { FormComponent} from './form/single/form.component';
// import { MaterialModule } from '@angular/material';
// import { ProgressBarModule} from 'ng2-progress-bar';
// import { MatTabsModule} from '@angular/material';




@NgModule({
  imports: [
    // CommonModule,
    FormsModule,
    SharedSmallModule,
    // MatSliderModule,
    // MatSlideToggleModule,
    // SignaturePadModule,
    SharedModule,
    CanvasWhiteboardModule,
    // UserModule,
    // MaterialModule,
    // MatTabsModule,
    // ProgressBarModule,

  ],
  declarations: [
    DrawingSignatureComponent,
    // UserFormsComponent,
    // UserFormsUploadAndList,
    // SeeDrawingDialogComponent,
    // EditOptionsComponentDialog,
    // FormComponent,
    // NewUserComponent
  ],
  exports: [
    DrawingSignatureComponent,

  ],
  providers: [
    // FormService,
  ],
  entryComponents: [
    // SeeDrawingDialogComponent,
    // EditOptionsComponentDialog,
  ]
})
export class DrawinSignaturegModule { }
