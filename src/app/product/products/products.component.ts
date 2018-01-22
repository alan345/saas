import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ProductService} from '../product.service';
import { Product} from '../product.model';
import { ToastsManager} from 'ng2-toastr';
import { Router} from '@angular/router';
import { GlobalEventsManager } from '../../globalEventsManager';
import { Search, PaginationData } from '../../shared/shared.model';
import { trigger, state, style, animate, transition} from '@angular/animations';
import { AuthService} from '../../auth/auth.service';
// import { ViewEncapsulation} from '@angular/core';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { DomSanitizer } from '@angular/platform-browser';
// import { UserService} from '../../user/user.service';
// import { MatDialog} from '@angular/material';
// import { TranslateService } from '../../translate/translate.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['../product.component.css'],
  animations: [
    trigger('hideShowAnimator', [
        state('true' , style({ backgroundColor: '#6be576' })),
        state('false', style({ backgroundColor: 'white' })),
        transition('0 => 1', animate('.2s')),
        transition('1 => 0', animate('.7s'))
    ])
]
  // encapsulation: ViewEncapsulation.None

})
export class ProductsComponent implements OnInit {
  @Input() customButton = false;
  @Input() showNewItem = true;
  @Input() showTitle = true;
  @Input() isDialog = false;
  @Output() customButtonActionEmit: EventEmitter<any> = new EventEmitter();
  @Output() closeDialogEmit: EventEmitter<any> = new EventEmitter();
  // token: string = localStorage.getItem('id_token');
  fetchedProducts: Product[] = [];
  listProductsTempToAdd: Product[] = [];
  search: Search = new Search()
  loading = false;
  valueTempProduct = 0;
  hideShowAnimator = false;;
  paginationData: PaginationData = new PaginationData()

  // trackinPage : any = {
  //   lastVisitPagePressCount:[],
  //   lastVisitPageProductCount:[]
  // }

  constructor(
    private productService: ProductService,
    private toastr: ToastsManager,
    private router: Router,
    private globalEventsManager: GlobalEventsManager,
    // private sanitizer: DomSanitizer,
    // public dialog: MatDialog,
    // private location: Location,
    private authService: AuthService,
    // private userService: UserService,
    // private translateService: TranslateService,
  ) {
  }




  customButtonAction(product: Product) {
    const this2 = this
    this.hideShowAnimator = true;
    setTimeout(_ => {
      this2.hideShowAnimator = false;
    }, 500);



    this.listProductsTempToAdd.push(product)
    this.valueTempProduct += product.details.price.sellingPrice
    this.customButtonActionEmit.emit(product);
  }

  actionRow(productId: string) {
    if(!this.customButton)
      this.router.navigate(['/product/' + productId]);
  }
  searchProducts() {
    this.getProducts(1, this.search)
  }
  closeDialog() {
    this.closeDialogEmit.emit()
  }


  orderBy(orderBy: string) {
    // this.search.orderBy = orderBy;
    this.getProducts(this.paginationData.currentPage, this.search);
  }

  onDelete(id: string) {
    this.productService.deleteProduct(id)
      .subscribe(
        res => {
          this.authService.successNotif(res.message);
          console.log(res);
        },
        error => {
          console.log(error);
        }
      );
  }

  getPage(page: number) {
    this.getProducts(page, this.search);
  }
  saved(result) {
    console.log(result)
    if(result) {
      this.getProducts(1, this.search)
    }
  }

  // loadMore(){
  //   this.paginationData.currentPage = this.paginationData.currentPage+1
  //   this.getProducts(this.paginationData.currentPage, this.search)
  // }

  getProducts(page: number, search: any) {
    // this.globalEventsManager.isLoadding(true);
    this.loading = true
    this.productService.getProducts(page, search)
      .subscribe(
        res => {
          this.paginationData = res.paginationData;
          this.fetchedProducts = res.data
          this.loading = false
          // this.globalEventsManager.isLoadding(false);
        },
        error => {
          this.loading = false
          console.log(error);
        }
      );
  }


  ngOnInit() {
    // this.translateService.use('fr');
    // console.log(this.translateService.instant('Add a product'))
    this.getProducts(1, this.search)
  }

  // isAdmin() {
  //   return this.authService.isAdmin();
  // }
}
