import { Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router} from '@angular/router';
import { Observable} from 'rxjs';
import { ToastsManager} from 'ng2-toastr';
import { UserService} from '../user/user.service'
import { User } from '../user/user.model'
import { AuthService} from '../auth/auth.service'






@Injectable()
export class CompanieGuardService implements CanActivate {

  constructor(
    private router: Router,
    private toastr: ToastsManager,
    private authService: AuthService,
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    //return this.authService.isCurrentUserHasCompanie()
    return true




    // let answer: boolean
    // this.userService.getUser('')
    //   .subscribe(
    //     res => {
    //       if (res.companies.length) {
    //         answer= true;
    //       } else {
    //         answer = false
    //       }
    //     },
    //     error => { console.log(error) }
    //   )
    //   if(answer) {
    //     return true
    //   } else {
    //     this.toastr.error('Create your own Companie!');
    //     this.router.navigate(['/companie/new']);
    //   }
  }
}
