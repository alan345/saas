import { Form } from '../picture/form/form.model';
import { User, UserCross } from '../user/user.model';
import { Product } from '../product/product.model';
// import { Project } from '../project/project.model';
import { Companie } from '../companie/companie.model';
// import { Drawing } from './single/drawing/drawing.model';
import { DrawingSignature } from './single/drawingSignature/drawingSignature.model';


export class Quote {
  _id = '';
  clients: User[] = [];
  historyClients: User[] = [];
  historyClientsCross: UserCross[] = [];
  name = '';
  statusQuote: string = 'pending';
  // statusQuoteString = '';
  typeQuote: string = 'quote';
  quoteNumber: number;
  isSigned = false;;
  legalApprovals: string[] = []
  typeIntervention = '';  // _users: User[] = [];
  // ownerQuotes: User[] = [];
  // companieClients: Companie[] = []
  forms: Form[] = [];
  parentQuotes: Quote[] = [];
  products: Product[] = [];
  // projects: Project[] = [];
  devisDetails: DevisDetail[] = []
  priceQuote: PriceQuote = new PriceQuote();
  // signature: Signature = new Signature();
  detail: Detail = new Detail();
  // drawing: Drawing = new Drawing();
  drawingSignature: DrawingSignature = new DrawingSignature();


}

export class Detail {
  currency = '';
  quoteRef = '';
  dateQuote: DateQuote = new DateQuote()
}

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 30);

export class DateQuote {
  issueDate: Date = new Date();
  // issueDateString = '';
  expiryDate: Date = tomorrow;
  // expiryDateString: string ='';
  dateInvoicePaid: Date = new Date();
  // dateInvoicePaidString: string ='';
}



//
// export class Signature {
//   base64 = '';
//   isSigned = false;
//   dateSignature: Date;
//   users: User[] = [];
// }
export class PriceQuote {
  priceQuoteWithoutTaxes: number = 0;
  priceQuoteWithTaxes: number = 0;
  discountGlobal: number = 0;
  painfulnessGlobal: number = 0;
  priceGlobalWithDiscount: number = 0;
  priceGlobalWithTaxesWithDiscount: number = 0;

  totalPaiementAmount: number = 0;
  outstandingBalance: number = 0;
  // priceGlobalWithDiscount: number = 0;
  vatGlobal: number = 0;
  priceQuoteTaxes: PriceQuoteTaxe[] = []
}

export class PriceQuoteTaxe {
  VAT: number = 0;
  TotalVAT: number = 0;
}

export const ModelVATs: number[] = [0, 5.5, 10]


export class BucketProduct {
  typeRow = '';
  title = '';
  productInit: Product[] = [];
  priceWithoutTaxes: number = 0;
  priceWithDiscount: number = 0;
  priceWithQuantityWithDiscount: number = 0;
  // priceWithQuantityWithDiscount: number = 0;
  priceWithTaxesWithQuantityWithDiscount: number = 0;
  // priceWithTaxesWithQuantityWithDiscount: number = 0;
  priceWithTaxesWithDiscount: number = 0;
  priceWithTaxes: number = 0;
  priceWithQuantity: number = 0;

  priceWithTaxesWithQuantity: number = 0;
  vat: number = 0;
  quantity: number = 1;
  length: number = 1;
  width: number = 1;
  surface: number = 1;
  discount: number = 0;
  isEditMode = false;
}

export class TextToQuote {
    title = '';
    priceWithoutTaxes: number;
  }

export class DevisDetail {
  nameBucketProducts = '';
  bucketProducts: BucketProduct[] = []
}

export const StatusQuotes =
[
  {indexStatus: 'pending', label: 'Pending Approval', icon: 'alarm', color: ''},
  {indexStatus: 'signed', label: 'Signed', icon: 'border_color', color: 'primary'},
  {indexStatus: 'paid', label: 'Paid', icon: 'attach_money', color: 'accent'},
  {indexStatus: 'rejected', label: 'Rejected', icon: 'face', color: 'warn'},
  // {indexStatus: 3, label: 'Signed, pending paiement'},
  // {indexStatus: 4, label: 'Done'},
]
// export const StatusQuotesInvoice =
// [
//   {indexStatus: 'sent', label: 'Sent'},
//   {indexStatus: 'paid', label: 'Paid'},
// ]

// export class Address {
//   address = '';
//   city = '';
//   state = '';
//   zip = '';
// }
