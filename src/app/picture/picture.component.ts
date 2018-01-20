import { Component, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { Form } from './form/form.model';
import { EditOptionsComponentDialog } from './form/single/modalLibrary/modalLibrary.component';
import { MatDialog } from '@angular/material';
import { FormComponent } from './form/single/form.component';
// import { ProjectSingleComponent }  from '../projectSingle.component';
// import { MatDialogRef} from '@angular/material';


@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css'],
})

export class PictureComponent {
  @Input() forms: Form[] = [];
  @Input() addPicture = true;
  @Input() openCameraStraight = false;
  @Input() showPagination = true;
  @Input() showPictures = true;
  @Input() singleForm = false;
  @Input() deletePicture = true;
  @Input() useDialog = true;
  @Input() openLibrairy = true;
  @Output() getPicture: EventEmitter<any> = new EventEmitter();
  @ViewChild(FormComponent) formComponent: FormComponent;

  // @Input() labelButtonAddPicture = 'Add Picture';
  constructor(
    public dialog: MatDialog,
  ) {}

  onGetForm(form) {
    window.open( './uploads/forms/' + form.owner + '/' + form.imagePath  );
  }
  openDialog(positionImage: string) {
    const dialogRef = this.dialog.open(EditOptionsComponentDialog);
    dialogRef.afterClosed().subscribe(result => {
      // console.log(result)
      if(result) {
        this.forms.push(result)
        this.getPicture.emit(result)
      }
    })
  }
  onPassForm(result) {
    this.forms.push(result)
  }
  // onPassForm(result) {
  //   this.forms.push(result)
  //   this.getPicture.emit(result)
  // }
  // removePic(i) {
  //   this.forms.splice(i, 1);
  // }
  // onFileSelect(result) {
  //   console.log(result)
  //   this.formComponent.toto(result)
  // }
  removeForm(formId) {
    this.forms.forEach((form, i) => {
      if(form._id === formId) {
        this.forms.splice(i, 1);
      }
    })
  }


}
