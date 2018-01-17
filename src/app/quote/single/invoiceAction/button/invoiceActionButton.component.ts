import {Component, Input} from '@angular/core';
import {QuoteService} from '../../../quote.service';
import {Quote} from '../../../quote.model';

import {ToastsManager} from 'ng2-toastr';
// import { Location } from '@angular/common';

@Component({
  selector: 'app-invoice-action-button',
  templateUrl: './invoiceActionButton.component.html',
  styleUrls: ['./invoiceActionButton.component.css'],
})
export class InvoiceActionButtonComponent {

  @Input() fetchedQuote: Quote = new Quote()
  @Input() typeQuote: string = ''
  @Input() showLabel: boolean = true
  loading: boolean = false


  constructor(
    private quoteService: QuoteService,
    private toastr: ToastsManager,

  ) {

  }


    downloadPDF() {
      this.loading = true
      this.quoteService.downloadPDF(this.fetchedQuote)
        .subscribe(
          res => {
             // window.open( '/uploads/pdf/' + res );
             this.loading = false
          },
          error => {
            this.loading = false
            console.log(error)
          }
        )
    }

    downloadInvoicePDF() {
      this.loading = true
      this.quoteService.downloadInvoicePDF(this.fetchedQuote)
        .subscribe(
          res => {
             // window.open( '/uploads/pdf/' + res );
             this.loading = false
          },
          error => {
            this.loading = false
            console.log(error)
          }
        )
    }

    sendQuoteByEmailToClient() {
      this.loading = true
      this.quoteService.sendQuoteByEmailToClient(this.fetchedQuote._id)
        .subscribe(
          res => {
            // console.log(res)
            this.toastr.success('Great!', 'Mail envoyeé!')
            //  window.open( '/uploads/pdf/' + res );
             this.loading = false
          },
          error => {
            this.loading = false
            console.log(error)
          }
        )
    }

    sendInvoiceByEmailToClient() {
      this.loading = true
      this.quoteService.sendInvoiceByEmailToClient(this.fetchedQuote._id)
        .subscribe(
          res => {
            this.toastr.success('Great!', 'Mail envoyeé!')
             this.loading = false
          },
          error => {
            this.loading = false
            console.log(error)
          }
        )
    }





}
