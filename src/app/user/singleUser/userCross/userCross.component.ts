import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { UserService } from '../../user.service';
import { Companie } from '../../../companie/companie.model';
import { CompanieService } from '../../../companie/companie.service';
import { ToastsManager } from 'ng2-toastr';
import { MatDialog } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { User, UserCross} from '../../user.model';
import { Address, AddressTypes } from '../../../shared/address/address.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//import { Form } from '../../../form/form.model';
// import { EditOptionsComponentDialog } from '../../../form/modalLibrary/modalLibrary.component';

// import { Right } from '../../../right/right.model';
// import { DeleteDialog } from '../../../deleteDialog/deleteDialog.component'
// import { Search } from '../../../shared/shared.model';


@Component({
  selector: 'app-user-cross',
  templateUrl: './userCross.component.html',
  styleUrls: ['./userCross.component.css'],

})

export class UserCrossComponent implements OnInit {
  @Output() saved: EventEmitter<any> = new EventEmitter();
  // @Input() search: Search = new Search()

  loading = false;
  fetchedCompanies: Companie[] = []
  // autocompleteCompanie = '';

  fetchedTypeUsers = []
  // autocompleteTypeUser = '';

  // fetchedRights: Right[] = []
  addressTypes = AddressTypes;
  // titleArray = ['Mr.', 'Mrs.']
  // languageArray = ['fr', 'en']
  typeClientArray = ['Individual', 'Company']
  // statusHouseArray = ['Propriétaire', 'Locataire']
  // typeHouseArray = ['Pavillon', 'Immeuble']
  // accessTypeArray = ['escalier', 'ascenseur']
  // sourceContactArray = ['Adwords', 'Appel Entrant', 'Apporteur Affaire']
  // companieIndexToSelect = ''
  // typeUserDropDown = ''
  // typeUser = TypeUser


  @Input() fetchedUser: User = new User();
  fetchedUserCross: UserCross = new UserCross();
  currentUser: User = new User();
  showProjects = false;
  places = []


  public myForm: FormGroup;

  constructor(
    private userService: UserService,
    private toastr: ToastsManager,
    public dialog: MatDialog,
    private router: Router,
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private _fb: FormBuilder,
    public authService: AuthService,
    private companieService: CompanieService,
  ) {
  }

  getUserCross(id: string) {
    this.loading = true
    this.userService.getUserCross(id)
      .subscribe(
        res => {
          this.loading = false
          this.fetchedUserCross = res
        },
        error => {
          this.loading = false
          console.log(error);
        }
      )
  }
  selectCity(i, city: string) {
    this.fetchedUserCross.profile.address[i].city = city
    this.fetchedUserCross.profile.address[i].cities = []
    // this.places = []
  }

  ngOnInit() {
    // this.authService.getCurrentUser().ownerCompanies.forEach((companie, i) => {
    //   if(companie.typeUsers.length)
    //     this.fetchedUser.typeUsers.push(companie.typeUsers[0].value)
    // })


    this.currentUser = this.authService.getCurrentUser()
    this.myForm = this._fb.group({

      typeUsers: [''],
      language: [''],
      colorCalendar: [''],
      otherData: [''],
      name: [''],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      phoneNumber: [''],
      fax: [''],
      title: ['', [Validators.required, Validators.minLength(1)]],
      typeClient: [''],
      statusHouse: [''],
      sourceContact: [''],

      typeHouse: [''],
      surface: [''],
      accesCode: [''],
      floor: [''],
      accessType: [''],


      address: [''],
      city: [''],
      state: [''],
      zip: [''],


    })
    //
    // this.fetchedUser.isExternalUser = this.search.isExternalUser
    // this.activatedRoute.params.subscribe((params: Params) => {
    //   if (params['id']) {
    //     this.getUser(params['id'])
    //
    //     this.search.userId = params['id']
    //     console.log(this.search)
    //   } else {
    //     if (params['isExternalUser'] === 'false') {
    //       this.fetchedUser.isExternalUser = false
    //     }
    //   }
    //
    // })
  }

  ngOnChanges() {
    if(this.fetchedUser._id)
      this.getUserCross(this.fetchedUser._id)
  }
  //
  // searchCompanies() {
  //   if(!this.autocompleteCompanie) {
  //     this.fetchedCompanies = []
  //   } else {
  //     let search = {
  //         search: this.autocompleteCompanie,
  //       };
  //     this.getCompanies(1, search)
  //   }
  // }

  // getCompanies(page: number, search: any) {
  //   this.companieService.getCompanies(page, search)
  //     .subscribe(
  //       res => {
  //         this.fetchedCompanies = res.data
  //       },
  //       error => {
  //         console.log(error);
  //       }
  //     );
  // }
  // selectCompanie(companie: Companie) {
  //   this.fetchedUser.ownerCompanies = [companie]
  // }


  // selectSalesMan(users) {
  //   this.fetchedUser.salesMan = users
  // }
  getPicture(result) {
    console.log(result)
  }

  // openDialog(positionImage: string) {
  //   // let dialogRef = this.dialog.open(EditOptionsComponentDialog);
  //   // dialogRef.afterClosed().subscribe(result => {
  //   //   if(result) {
  //   //     this.fetchedUser.profile.profilePicture.push(result)
  //   //   }
  //   // })
  // }
  // removePic(i) {
  //   this.fetchedUser.profile.profilePicture.splice(i, 1);
  // }

  // autocolplete typeUser
  // searchTypeUser() {
  //   if (!this.autocompleteTypeUser) {
  //     this.fetchedTypeUsers = []
  //   } else {
  //     this.fetchedTypeUsers = this.typeUser.filter((el) =>
  //       el.toLowerCase().indexOf(this.autocompleteTypeUser.toLowerCase()) > -1
  //     );
  //   }
  // }
  // selectTypeUser(typeUser) {
  //   this.autocompleteTypeUser = '';
  //   this.fetchedTypeUsers = [];
  //   this.fetchedUser.typeUsers.push(typeUser);
  // }
  // removeTypeUser(i: number) {
  //   this.fetchedUser.typeUsers.splice(i, 1);
  // }
  // autocolplete typeUser







  // goBack() {
  //   this.location.back();
  // }

  // openDialogDelete() {
  //   // let this2 = this
  //   // let dialogRefDelete = this.dialog.open(DeleteDialog)
  //   // dialogRefDelete.afterClosed().subscribe(result => {
  //   //   if (result) {
  //   //     this.onDelete(this.fetchedUser._id).then(function() {
  //   //       this2.router.navigate(['user']);
  //   //     })
  //   //
  //   //   }
  //   // })
  // }


  save() {
    this.loading = true
    // this.userService.cleanCurrentUserInSession()
    //console.log(this.typeUserDropDown)
    //this.fetchedUser.type = [this.typeUserDropDown]
    if (this.fetchedUserCross._id) {
      this.userService.updateCrossUser(this.fetchedUserCross)
        .subscribe(
        res => {
          this.authService.successNotif(res.message)
          // this.fetchedUserCross = res.obj
          // this.getUserCross(res.obj._id)
          // console.log(this.fetchedUser._id)
          this.saved.emit(res.obj)
          this.loading = false
          // this.getUserCross(this.fetchedUser._id)
          // location.reload();
          // if(redirect == 'profile')
          //   this.router.navigate(['user/profile/' + res.obj._id])
          // if(redirect == 'project')
          //   this.router.navigate(['project/new/' + res.obj._id])
        },
        error => {
          this.toastr.error('Error!')
          this.loading = false
          console.log(error)
        }
      )
    } else {
      this.fetchedUserCross.users.push(this.fetchedUser)
      this.userService.saveCrossUser(this.fetchedUserCross)
        .subscribe(
        res => {
          this.loading = false
          this.authService.successNotif(res.message)
          // this.fetchedUserCross = res.obj
          // console.log(res.obj._id)
          // this.getUserCross(this.fetchedUser._id)
          // this.fetchedUser = res.obj
          this.saved.emit(res.obj)
          // if(redirect == 'profile')
          // this.router.navigate(['user/newuser/' + res.obj._id])
          // location.reload();
          // if(redirect == 'project')
          //   this.router.navigate(['project/new/' + res.obj._id])
          // this.addUserIdToCompanie(res.obj)
          //this.router.navigate(['user'])
        },
        error => {
          console.log(error)
          this.loading = false
          this.toastr.error('Error!')
        }
        );
    }
  }


  navigate(id: string) {
    this.router.navigate(['user/' + id])
  }

  isUserIsMyself() {
    if (this.currentUser._id === this.fetchedUser._id)
      return true
    return false
  }



  //
  //
  // onDelete(id: string) {
  //   let this2 = this
  //   return new Promise(function(resolve, reject) {
  //     this2.userService.deleteUser(id)
  //       .subscribe(
  //       res => {
  //         this2.authService.successNotif(res.message);
  //         resolve(res)
  //       },
  //       error => {
  //         console.log(error);
  //         reject(error)
  //       }
  //       )
  //   })
  // }

}
