import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { RouterModule} from '@angular/router';
import { CompaniesComponent} from './companies/companies.component';
import { CompanieComponent} from './single/companie.component';
import { DetailsCompanieComponent} from './single/detailsCompanie/detailsCompanie.component';
import { QuoteSettingsComponent} from './single/quoteSettings/quoteSettings.component';
import { DetailsCalendarComponent} from './single/detailsCalendar/detailsCalendar.component';
import { CategProductComponent} from './single/categProduct/categProduct.component';
import { CompanieService} from './companie.service';
import { CompanieRouting} from './companieRouting.module';
import { CompanieDialogComponent } from './single/dialog/companieDialog.component';
import { SharedModule } from '../shared/shared.module';
import { PaiementService} from './single/paiement/paiement.service';
import { PaiementComponent } from './single/paiement/paiement.component';
import { ConnectStripeComponent } from './single/connectStripe/connectStripe.component';
import { DebugComponent } from './single/debug/debug.component';
import { VATComponent } from './single/quoteSettings/elem/vat.component';
import { LegalApprovalComponent } from './single/quoteSettings/elem/legalApproval.component';
import { TypeInterventionComponent } from './single/quoteSettings/elem/typeIntervention.component';
import { PaiementPipe } from './single/paiement/paiement.pipe';
import { MatCardModule} from '@angular/material';
import { MatExpansionModule} from '@angular/material';
import { MatSelectModule} from '@angular/material';
import { MatButtonToggleModule} from '@angular/material';
import { PaiementCardModule} from '../nav/paiementCard/paiementCard.module';
import { MatCheckboxModule} from '@angular/material';
import { MatTabsModule} from '@angular/material/tabs';
// import { CommonModule } from '@angular/common';
// import { CompanieDetailUsersComponent} from './companieDetailUsers.component';
// import { AddUserByCompanieComponent} from './addUser/addUserByCompanie.component';
// import { EditAddUserToCompanieComponent} from './addUser/editAddUserToCompanie.component';
// import { CompanieDetailComponent} from './single/companieDetail.component';
// import { MaterialModule } from '@angular/material';
// import {MatRadioModule} from '@angular/material';
// import {MatIconModule} from '@angular/material';
// import {MatInputModule} from '@angular/material';
// import {MatFormFieldModule} from '@angular/material';


@NgModule({
  imports: [

    CompanieRouting,
    // CommonModule,
    // FormsModule,
    // MaterialModule,
    ReactiveFormsModule,
    PaiementCardModule,
    RouterModule,
    SharedModule,
    MatCardModule,
    MatExpansionModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatTabsModule,
    // MatIconModule,
    // MatInputModule,
    // MatFormFieldModule,
    // MatRadioModule,

  ],
  declarations: [
    // CompanieDetailUsersComponent,
    CompaniesComponent,
    CompanieComponent,
    DetailsCompanieComponent,
    QuoteSettingsComponent,
    DetailsCalendarComponent,
    // EditAddUserToCompanieComponent,
    // CompanieDetailComponent,
    CompanieDialogComponent,
    PaiementComponent,
    PaiementPipe,
    ConnectStripeComponent,
    DebugComponent,
    VATComponent,
    LegalApprovalComponent,
    TypeInterventionComponent,
    CategProductComponent,
    // AddUserByCompanieComponent,
  ],
  exports:      [ ],
  providers:    [ CompanieService, PaiementService ],
  entryComponents: [
    CompanieDialogComponent
  ]
})
export class CompanieModule { }
