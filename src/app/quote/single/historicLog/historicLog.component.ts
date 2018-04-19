import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Quote } from '../../quote.model';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Search} from '../../../shared/shared.model'
import { AuthService} from '../../../auth/auth.service';
import { Companie} from '../../../companie/companie.model';


@Component({
  selector: 'app-historicLog',
  templateUrl: './historicLog.component.html',
  styleUrls: ['../../quote.component.css'],
})
export class HistoricLogComponent implements OnInit {
  loading = false;

  @Input() search: Search = new Search();
  @Input() fetchedQuote: Quote = new Quote();

  constructor(
    public authService: AuthService,
  ) {
    // dateAdapter.setLocale(authService.getLanguage());
  }

  ngOnInit() {
  }

}
