import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
// import { AuthService } from '../../../auth/auth.service';
// import { QuoteService } from '../../quote.service';
// import { TemplateQuoteService } from '../../templateQuote.service';

// import { DragulaService } from 'ng2-dragula';
// import { ProductService } from '../../../product/product.service';
// import { ProjectService} from '../../../project/project.service';
// import { ProductsDialogComponent } from '../../../../product/products/dialog/productsDialog.component';

import {
  Quote, DevisDetail, BucketProduct, StatusQuotes,
  // StatusQuotesInvoice,
  // PriceQuoteTaxe,
  // ModelVATs
} from '../../../quote.model';
// import { TemplateQuote } from '../../templateQuote.model';

// import { ToastsManager } from 'ng2-toastr';
// import { MatDialog } from '@angular/material';
// import { Params } from '@angular/router';
// import { Location } from '@angular/common';
// import { FormGroup, Validators } from '@angular/forms';
// import { UserService } from '../../../user/user.service';
// import { DeleteDialog } from '../../../deleteDialog/deleteDialog.component';
// import { User } from '../../../user/user.model';
import { Product } from '../../../../product/product.model';
// import { Project } from '../../../project/project.model';
// import { PaiementQuote } from '../../../paiementQuote/paiementQuote.model';
// import { PaiementQuoteDialogComponent } from '../paiementQuote/single/dialog/paiementQuoteDialog.component';
// import { PaiementQuoteDialogComponent } from '../../../paiementQuote/single/dialog/paiementQuoteDialog.component'

// import { TranslateService } from '../../../translate/translate.service';
// declare let jsPDF;
// import { SignaturePad } from 'angular2-signaturepad/signature-pad';
// import { SignaturePad } from '../../../angular2-signaturepad/signature-pad';

// import { PaiementQuotesComponent } from '../../../paiementQuote/paiementQuotes/paiementQuotes.component';
import { Search } from '../../../../shared/shared.model'

@Component({
  selector: 'app-mobile-details',
  templateUrl: './mobileDetails.component.html',
  styleUrls: ['../quoteDetails.component.css'],
})
export class MobileDetailsComponent implements OnInit {
  // @ViewChild(SignaturePad) signaturePad: SignaturePad;
  // @ViewChild(PaiementQuotesComponent) paiementQuotesComponent: PaiementQuotesComponent;

  // loading: boolean=false;
  // @Output() saved: EventEmitter<any> = new EventEmitter();
  // @Output() quoteDetailsUpdated: EventEmitter<any> = new EventEmitter();
  @Output() calculateQuoteEmit: EventEmitter<any> = new EventEmitter();

  @Input() fetchedQuote: Quote = new Quote()
  // @Input() search: Search = new Search()
  //
  // // showPaiements: boolean = false
  // // fetchedQuote: Quote = new Quote()
  // // autocompleteUser: string = '';
  // // autocompleteProject: string = '';
  // fetchedProducts: Product[] = []

  // imgLogoUrl: string = './assets/images/profile-placeholder.jpg'
  // imgSignatureBase64Temp = ''
  // fetchedPaiementQuotes: PaiementQuote[] = []
  statusQuotes = StatusQuotes

  constructor(
    // public dialog: MatDialog,
  ) {

  }



  removeBucketProducts(i) {
    this.fetchedQuote.devisDetails.splice(i, 1);
    this.calculateQuote()
  }
  addBucketProducts() {
    const newDevisDetail = new DevisDetail()
    this.fetchedQuote.devisDetails.push(newDevisDetail)
  }

  //
  // selectTemplateQuote(templateQuote: TemplateQuote) {
  //   this.arrayContentToSearch = []
  //   templateQuote.devisDetails.forEach(devisDetail => {
  //     this.fetchedQuote.devisDetails.push(devisDetail)
  //   })
  //
  //   this.calculateQuote()
  // }

  //
  // addProductToQuote(product: Product) {
  //     const bucketProduct: BucketProduct = new BucketProduct()
  //     bucketProduct.typeRow = 'product'
  //     bucketProduct.productInit = [product]
  //     bucketProduct.vat = product.details.price.vat
  //     bucketProduct.priceWithoutTaxes = product.details.price.sellingPrice
  //     bucketProduct.priceWithTaxes = 0
  //     bucketProduct.priceWithTaxesWithQuantity = 0
  //     bucketProduct.priceWithQuantity = 0
  //     bucketProduct.quantity = 1
  //     bucketProduct.discount = 0
  //
  //     const newDevisDetail: DevisDetail = new DevisDetail();
  //     newDevisDetail.bucketProducts.push(bucketProduct)
  //     this.fetchedQuote.devisDetails.push(newDevisDetail)
  //     this.calculateQuote();
  // }

  // openProducts() {
  //   const this2 = this
  //   const dialogRefProducts = this.dialog.open(ProductsDialogComponent)
  //   const sub = dialogRefProducts.componentInstance.onAdd.subscribe((product) => {
  //     this.addProductToQuote(product)
  //     // do something
  //   });
  //   dialogRefProducts.afterClosed().subscribe(result => {
  //     if (result) {
  //       // this.onDelete(this.fetchedProduct._id).then(function() {
  //       //   this2.router.navigate(['product']);
  //       // })
  //     }
  //   })
  // }
  // selectProduct(product: Product, i, j) {
  //
  //   // let bucketProduct: BucketProduct = new BucketProduct()
  //
  //     this.fetchedQuote.devisDetails[i].bucketProducts[j].productInit = [product],
  //     this.fetchedQuote.devisDetails[i].bucketProducts[j].vat = product.details.price.vat,
  //     this.fetchedQuote.devisDetails[i].bucketProducts[j].priceWithoutTaxes = product.details.price.sellingPrice,
  //     this.fetchedQuote.devisDetails[i].bucketProducts[j].priceWithTaxes = 0,
  //     this.fetchedQuote.devisDetails[i].bucketProducts[j].priceWithTaxesWithQuantity = 0,
  //     this.fetchedQuote.devisDetails[i].bucketProducts[j].priceWithQuantity = 0,
  //     this.fetchedQuote.devisDetails[i].bucketProducts[j].quantity = 1,
  //     this.fetchedQuote.devisDetails[i].bucketProducts[j].discount = 0,
  //
  //     // this.autocompleteProduct = ''
  //
  //     // this.fetchedQuote.devisDetails[i].bucketProducts.push(bucketProduct)
  //     this.calculateQuote()
  // }
  // onEditorCreated(quill) {
  // }


  // onEditorBlured(quill, i, j) {
  //   this.changeQuillEditMode(i, j)
  // }

  // onEditorFocused(quill) {
  // }

  //
  // onContentChanged({ quill, html, text }) {
  // }
  // changeQuillEditMode(i: number, j: number) {
  //   this.fetchedQuote.devisDetails[i].bucketProducts[j].isEditMode = !this.fetchedQuote.devisDetails[i].bucketProducts[j].isEditMode
  // }

  //
  // calculateQuote() {
  //   let this2 = this;
  //   setTimeout(function() {
  //     this2.fetchedQuote.priceQuote.priceQuoteWithTaxes = 0
  //     this2.fetchedQuote.priceQuote.priceQuoteWithoutTaxes = 0
  //
  //     this2.fetchedQuote.priceQuote.priceQuoteTaxes = []
  //     this2.VATs.forEach(VAT => {
  //       let newPriceQuoteTaxe = new PriceQuoteTaxe()
  //       newPriceQuoteTaxe.VAT = VAT
  //       this2.fetchedQuote.priceQuote.priceQuoteTaxes.push(newPriceQuoteTaxe)
  //     })
  //
  //     this2.fetchedQuote.devisDetails.forEach((devisDetails, i) => {
  //       this2.fetchedQuote.devisDetails[i].bucketProducts.forEach((product, j) => {
  //
  //         this2.fetchedQuote.devisDetails[i].bucketProducts[j]
  //           .surface = this2.fetchedQuote.devisDetails[i].bucketProducts[j]
  //             .width * this2.fetchedQuote.devisDetails[i].bucketProducts[j]
  //             .length
  //
  //
  //         this2.fetchedQuote.devisDetails[i].bucketProducts[j]
  //           .priceWithDiscount = product.priceWithoutTaxes
  //           * (1 - this2.fetchedQuote.devisDetails[i].bucketProducts[j].discount / 100)
  //
  //         this2.fetchedQuote.devisDetails[i].bucketProducts[j]
  //           .priceWithTaxes = this2.fetchedQuote.devisDetails[i].bucketProducts[j]
  //             .priceWithoutTaxes * (1 + this2.fetchedQuote.devisDetails[i].bucketProducts[j].vat / 100)
  //
  //         this2.fetchedQuote.devisDetails[i].bucketProducts[j]
  //           .priceWithTaxesWithDiscount = this2.fetchedQuote.devisDetails[i].bucketProducts[j]
  //             .priceWithTaxes * (1 - this2.fetchedQuote.devisDetails[i].bucketProducts[j].discount / 100)
  //
  //         this2.fetchedQuote.devisDetails[i].bucketProducts[j]
  //           .priceWithTaxesWithQuantity = this2.fetchedQuote.devisDetails[i].bucketProducts[j]
  //             .priceWithTaxes * this2.fetchedQuote.devisDetails[i].bucketProducts[j].quantity
  //
  //         this2.fetchedQuote.devisDetails[i].bucketProducts[j]
  //           .priceWithTaxesWithQuantityWithDiscount = this2.fetchedQuote.devisDetails[i].bucketProducts[j]
  //             .priceWithTaxesWithQuantity
  //           * (1 - this2.fetchedQuote.devisDetails[i].bucketProducts[j].discount / 100)
  //
  //
  //
  //         this2.fetchedQuote.devisDetails[i].bucketProducts[j]
  //           .priceWithQuantity = this2.fetchedQuote.devisDetails[i].bucketProducts[j]
  //             .priceWithoutTaxes * this2.fetchedQuote.devisDetails[i].bucketProducts[j].quantity
  //
  //
  //         this2.fetchedQuote.devisDetails[i].bucketProducts[j]
  //           .priceWithQuantityWithDiscount = this2.fetchedQuote.devisDetails[i].bucketProducts[j]
  //             .priceWithQuantity * (1 - this2.fetchedQuote.devisDetails[i].bucketProducts[j]
  //               .discount / 100)
  //
  //
  //         this2.fetchedQuote.devisDetails[i].bucketProducts[j]
  //           .priceWithQuantityWithDiscount = this2.fetchedQuote.devisDetails[i].bucketProducts[j]
  //             .priceWithQuantityWithDiscount * this2.fetchedQuote.devisDetails[i].bucketProducts[j].surface
  //
  //         this2.fetchedQuote.devisDetails[i].bucketProducts[j]
  //           .priceWithTaxesWithQuantityWithDiscount = this2.fetchedQuote.devisDetails[i].bucketProducts[j]
  //             .priceWithQuantityWithDiscount * (1 - this2.fetchedQuote.devisDetails[i].bucketProducts[j].vat / 100)
  //
  //
  //         this2.fetchedQuote.priceQuote
  //           .priceQuoteWithTaxes += this2.fetchedQuote.devisDetails[i].bucketProducts[j]
  //             .priceWithTaxesWithQuantityWithDiscount * 1
  //
  //         this2.fetchedQuote.priceQuote
  //           .priceQuoteWithoutTaxes += this2.fetchedQuote.devisDetails[i].bucketProducts[j]
  //             .priceWithQuantityWithDiscount * 1
  //
  //
  //         this2.fetchedQuote.priceQuote
  //           .priceGlobalWithDiscount = this2.fetchedQuote.priceQuote
  //             .priceQuoteWithoutTaxes
  //           * (1 - this2.fetchedQuote.priceQuote.discountGlobal / 100)
  //
  //         this2.fetchedQuote.priceQuote
  //           .priceGlobalWithDiscount = this2.fetchedQuote.priceQuote
  //             .priceGlobalWithDiscount * (1 + this2.fetchedQuote.priceQuote.painfulnessGlobal / 100)
  //
  //         this2.fetchedQuote.priceQuote
  //           .priceGlobalWithTaxesWithDiscount = this2.fetchedQuote.priceQuote
  //             .priceGlobalWithDiscount * (1 + this2.fetchedQuote.priceQuote.vatGlobal / 100)
  //
  //         this2.fetchedQuote.priceQuote.priceQuoteTaxes.forEach((priceQuoteTaxe, i) => {
  //           if (priceQuoteTaxe.VAT === product.vat) {
  //             this2.fetchedQuote.priceQuote.priceQuoteTaxes[i]
  //               .TotalVAT += (product.priceWithDiscount * product.vat / 100) * product.quantity
  //           }
  //         })
  //
  //
  //       })
  //     })
  //
  //     this2.quoteDetailsUpdated.emit(this2.fetchedQuote)
  //   }, 20)
  //
  // }
  calculateQuote() {
    this.calculateQuoteEmit.emit()
  }
  removeRow(i: number, j: number) {
    this.fetchedQuote.devisDetails[i].bucketProducts.splice(j, 1);
    this.calculateQuote()
  }

  //
  // addRow(typeRow) {
  //   if (typeRow) {
  //     if (typeRow === 'category')
  //       this.addBucketProducts()
  //
  //     if (!this.fetchedQuote.devisDetails.length)
  //       this.addBucketProducts()
  //
  //     if (typeRow === 'product' || typeRow === 'text') {
  //       let bucketProduct: BucketProduct = new BucketProduct()
  //       bucketProduct.isEditMode = true
  //       bucketProduct.typeRow = typeRow
  //       this.fetchedQuote.devisDetails[this.fetchedQuote.devisDetails.length - 1].bucketProducts.push(bucketProduct)
  //       this.calculateQuote()
  //     }
  //   }
  // }
  //
  // saveTemplateQuote(nameTemplate: string) {
  //   const newTemplateQuote = new TemplateQuote()
  //   newTemplateQuote.nameTemplate = nameTemplate
  //
  //   newTemplateQuote.devisDetails = this.fetchedQuote.devisDetails
  //   this.templateQuoteService.saveTemplateQuote(newTemplateQuote)
  //     .subscribe(
  //     res => {
  //       this.authService.successNotif(res.message)
  //     },
  //     error => { console.log(error) }
  //     )
  // }
  //




  ngOnInit() {

  }



}
