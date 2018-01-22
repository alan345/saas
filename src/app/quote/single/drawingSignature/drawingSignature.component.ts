import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { DrawingSignature } from './drawingSignature.model';
import { CanvasWhiteboardComponent} from 'ng2-canvas-whiteboard';
// import { SignaturePad } from '../angular2-signaturepad/signature-pad';


@Component({
  selector: 'app-drawing-signature',
  viewProviders: [CanvasWhiteboardComponent],
  templateUrl: './drawingSignature.component.html',
  styleUrls: ['./drawingSignature.component.css']
})


export class DrawingSignatureComponent implements OnInit {
  // @ViewChild(SignaturePad) signaturePad: SignaturePad;
  // @ViewChild('signaturePadClass') elementView: ElementRef;
  @ViewChild('canvasWhiteboard') canvasWhiteboard: CanvasWhiteboardComponent;

  // @ViewChild('signaturePadClass') elementView: ElementRef;
  imgSignatureBase64Temp: string[] = [];
  drawing: DrawingSignature = new DrawingSignature();
  // @Input() base64 = '';
  // @Output() saved: EventEmitter<any> = new EventEmitter();
  @Output() updated: EventEmitter<any> = new EventEmitter();
  @Output() cleared: EventEmitter<any> = new EventEmitter();
  editMode = false;
  // color = '';
  // signaturePadOptions = { // passed through to szimek/signature_pad constructor
  //   minWidth: 1,
  //   maxWidth: 3,
  //   canvasWidth: 600,
  //   canvasHeight: 425,
  //   penColor: "#292b2c",
  // };



  constructor() { }


  toDataURL(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      var reader = new FileReader();
      reader.onloadend = function() {
        callback(reader.result);
      }
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  }



  sendBatchUpdate(result) {
      this.updated.emit(this.canvasWhiteboard.generateCanvasDataUrl())
  }
  ngOnInit() {
    // this.changeColor('#757575')
  }

  // getPicture() {
  //
  //   this.drawing.backgroundForms.forEach(form => {
  //     let this2=this;
  //     this.toDataURL('./uploads/forms/' + form.owner + '/' + form.imagePath, function(dataUrl) {
  //       this2.drawing.base64 = dataUrl
  //       // console.log(dataUrl)
  //     })
  //   })
  // }
  // ngOnChanges() {
  //
  //   // this.imgSignatureBase64Temp.push(this.base64)
  // }

  ngAfterViewInit() {
    setTimeout(_=> {
      // this.editMode = true
      this.changeSlider()
    });
    // this.changeSlider()
    // console.log(this.elementView.nativeElement.offsetWidth);
    // console.log(this.elementView.nativeElement.offsetWidth)
    // this.signaturePad.set('minWidth', 1); // set szimek/signature_pad options at runtime
    // this.signaturePad.set('canvasWidth', this.elementView.nativeElement.offsetWidth); // set szimek/signature_pad options at runtime
    // this.signaturePad.clear(); // invoke functions from szimek/signature_pad API

  }
  changeSlider() {
    this.drawing.base64 = this.canvasWhiteboard.generateCanvasDataUrl()
    // console.log(this.drawing.base64)
    this.canvasWhiteboard.toggleShouldDraw();
    // console.log('aa')
    // this.signaturePad.fromDataURL(this.base64)
    // if(!this.editMode) return
    // // let this2 = this
    // // setTimeout(function(){
    // this.signaturePad.fromDataURL(this.drawing.base64)
    // }, 5);

  }
  // changeColor(color: string) {
  //   this.canvasWhiteboard.changeColor(color);
  //   this.color = color;
  //   // this.signaturePadOptions.penColor = color;
  //   // this.signaturePad.set('penColor', color);
  // }
  clearDrawing() {
    // this.signaturePad.clear();
    this.canvasWhiteboard.clearCanvas();
    this.drawing.base64 = ''
    this.cleared.emit()
  }
  // redoVersion() {
  //   this.canvasWhiteboard.redo();
  // }
  // undoVersion() {
  //   this.canvasWhiteboard.undo();
  //   // console.log(this.canvasWhiteboard.generateCanvasDataUrl());
  //
  //   // this.imgSignatureBase64Temp.pop();
  //   // this.signaturePad.clear();
  //   // this.signaturePad.fromDataURL(this.imgSignatureBase64Temp[this.imgSignatureBase64Temp.length - 1]);
  //   // // this.base64 = this.signaturePad.toDataURL();
  //   // this.saved.emit(this.signaturePad.toDataURL('image/png', 1))
  // }
  // drawComplete() {
  //   // will be notified of szimek/signature_pad's onEnd event
  //   // console.log(this.signaturePad.toDataURL());
  //   // this.imgSignatureBase64Temp.push( this.signaturePad.toDataURL('image/png', 1) )
  //   // this.base64 = this.signaturePad.toDataURL();
  //   // this.saved.emit(this.signaturePad.toDataURL('image/png', 1))
  //
  // }
  // sendBatchUpdate(result) {
  //   // this.imgSignatureBase64Temp.push(this.canvasWhiteboard.generateCanvasDataUrl())
  //   // this.saved.emit(this.canvasWhiteboard.generateCanvasDataUrl())
  //   // console.log(result)
  // }
  // saveDrawing() {
  //   this.saved.emit(this.canvasWhiteboard.generateCanvasDataUrl())
  // }
  // downloadDrawing() {
  //   this.canvasWhiteboard.downloadCanvasImage()
  // }
  // changeSize(event) {
  //   // this.signaturePadOptions.minWidth = event.value;
  //   // this.signaturePad.set('minWidth', event.value);
  //   // this.signaturePad.set('maxWidth', event.value + 2);
  // }
  // drawStart() {
  //   // will be notified of szimek/signature_pad's onBegin event
  //   // console.log('begin drawing');
  // }

}
