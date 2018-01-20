import { Component, OnInit, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import { AuthService} from '../../auth/auth.service';
import { QuoteService} from '../../quote/quote.service';
import { Quote, StatusQuotes} from '../../quote/quote.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Search, PaginationData } from '../../shared/shared.model';
// import { ToastsManager} from 'ng2-toastr';
// import { Location} from '@angular/common';
// import { MatDialog} from '@angular/material';
// import { GlobalEventsManager } from '../../globalEventsManager';



@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['../quote.component.css'],
})
export class QuotesComponent implements OnInit, OnChanges {
  @Input() userId = '';
  @Input() projectId = '';
  @Input() showSearch = true;
  @Input() showBack: number = -1;
  // @Input() showBackButton = true;
  // @Input() idProject = '';
  @Input() idClient = '';
  @Input() createNewButton = true;
  @Output() savedEmit: EventEmitter<any> = new EventEmitter();

  fetchedQuotes: Quote[] = [];
  loading = false;
  paginationData = new PaginationData();

  statusQuotes = StatusQuotes;
  @Input() search = new Search();

  constructor(
    private quoteService: QuoteService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    // private toastr: ToastsManager,
    // private globalEventsManager: GlobalEventsManager,
  //  private modalService: NgbModal,
    // public dialog: MatDialog,
    // private location: Location,
  ) {}


  ngOnChanges() {
    this.getQuotes(this.paginationData.currentPage, this.search);
  }

  ngOnInit() {
    this.search.orderBy = '-createdAt'
    this.activatedRoute.params.subscribe((params: Params) => {
      // if(params['searchType'] === 'quoteAssignedToMe') {
      //   this.search.isQuoteAssignedToMe = true
      //   this.getQuotes(this.paginationData.currentPage, this.search);
      // }
      // if(params['searchType'] === 'invoice') {
      //   this.search.typeQuote = params['searchType']
      //   this.getQuotes(this.paginationData.currentPage, this.search);
      // }
      if(params['searchType'] === 'quote') {
        this.search.typeQuote = params['searchType']
        this.getQuotes(this.paginationData.currentPage, this.search);
      }
    })


    // let this2 = this
    // setTimeout(function(){
    //   this2.search.userId = this2.userId
    //   this2.search.projectId = this2.projectId
    //   this2.search.orderBy = 'name'
    //   this2.getQuotes(1, this2.search)
    // }, 200);

  }
  navigateToQuote(quote: Quote) {
    this.router.navigate(['/quote/' + quote._id]);
  }

  // saveAsInvoice() {
  //   this.quoteService.saveAsInvoice(this.search.parentQuoteId)
  //     .subscribe(
  //     res => {
  //       // this.authService.successNotif(res.message)
  //       this.saved.emit(res)
  //       // this.goToInvoice(res.obj._id)
  //     }, error => { console.log(error) } )
  // }
  searchData() {
    this.getQuotes(this.paginationData.currentPage, this.search)
  }
  saved(result) {
    this.savedEmit.emit()
    this.getQuotes(this.paginationData.currentPage, this.search)
  }
  // onSelectChange = ($event: any): void => {
  //   this.search.isQuoteAssignedToMe = $event.tab.content.viewContainerRef.element.nativeElement.getAttribute('data-isQuoteAssignedToMe')
  //   this.getQuotes(this.paginationData.currentPage, this.search);
  //
  // }


  // searchQuotes(){}

  //
  // goBack() {
  //   this.location.back();
  // }

  searchInput() {
    this.getQuotes(this.paginationData.currentPage, this.search)
  }

  orderBy(orderBy: string) {
    this.search.orderBy = orderBy
    this.getQuotes(this.paginationData.currentPage, this.search)
  }

  onDelete(id: string) {
    this.quoteService.deleteQuote(id)
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
    this.getQuotes(page, this.search);
  }


  getQuotes(page: number, search: any) {
    // this.globalEventsManager.isLoadding(true);
    this.loading = true
    this.quoteService.getQuotes(page, search)
      .subscribe(
        res => {

        //  console.log("quotes");
        //  console.log(res);
          this.paginationData = res.paginationData;
          this.fetchedQuotes =  res.data
          // this.fetchedQuotes.forEach((quote, i) => {
          //   this.statusQuotes.forEach(status => {
          //     // if(status.indexStatus === quote.statusQuote)
          //       // this.fetchedQuotes[i].statusQuoteString = status.label
          //   })
          //   // this.statusQuotesInvoice.forEach(status => {
          //   //   if(status.indexStatus === quote.statusQuote)
          //   //     this.fetchedQuotes[i].statusQuoteString = status.label
          //   // })
          // })
          this.loading = false
        },
        error => {
          this.loading = false
          console.log(error);
        }
      );
  }


  // isAdmin() {
  //   return this.authService.isAdmin();
  // }


}
