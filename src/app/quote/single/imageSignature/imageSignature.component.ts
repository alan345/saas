import {Component, OnInit, Input} from '@angular/core';
import {Quote } from '../../quote.model';


@Component({
  selector: 'app-imageSignature',
  templateUrl: './imageSignature.component.html',
  styleUrls: ['../../quote.component.css'],
})
export class ImageSignatureComponent implements OnInit {

  @Input() fetchedQuote: Quote = new Quote();

  constructor(
  ) {
  }

  ngOnInit() {
  }

}
