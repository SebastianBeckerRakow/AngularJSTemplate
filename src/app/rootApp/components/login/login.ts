/**
 * login component to handle login view.
 */

import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, RouterState, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import {Message} from '../nonModalMessages/nonModalMessage'
import {AppService} from '../../services/app.service';
import {LoginService} from '../../services/login.service';

declare const gapi: any;

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit {

  returnUrl: string;
  componentData = null;

  // Form values
  public userName: string;
  public password: string;
  public rememberMe: boolean;

  public ecmLoginButtonText: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private appService: AppService,
              private loginService: LoginService) {

    const state: RouterState = router.routerState;
    const snapshot: RouterStateSnapshot = state.snapshot;
    const root: ActivatedRouteSnapshot = snapshot.root;
    const child = root.firstChild;

  }

  /**
   * If the user is already logged in, we can forward to home view.
   * TODO: check if there is an earlier place for the check, because the user sees the login view for some seconds.
   * Better will be a direct forwarding when the app starts.
   **/
  ngOnInit() {
    console.log('ngOnInit');

    // get ReturnUrl or set to home
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'home';

    // load local stored data
    this.rememberMe = this.loginService.getLocalRememberMe();
    if (this.rememberMe) {
      this.userName = this.loginService.getLocalUsername();
    }

    const self = this;
    if (this.loginService.isLoggedIn()) {
      this.loginService.login()
        .then(function () {
          console.log('logged in');
          // navigate to returnUrl
          self.router.navigate([self.returnUrl]);
        }, function (error) {
          console.log(error);
        });
    }
  }


  storeLocalItems() {
    // store local data
    this.loginService.setLocalRememberMe(this.rememberMe);
    if (this.rememberMe) {
      this.loginService.setLocalUsername(this.userName);
    } else {
      this.loginService.setLocalUsername(null);
    }
  }

  Login() {
    const self = this;
    this.storeLocalItems();
    const successHandler = function () {
      console.log('logged in');
      // navigate to redirectUrl
      self.router.navigate([self.returnUrl]);
    };

    const errorHandler = function (error) {
      self.componentData = {
        component: Message,
        inputs: {
          msg: error,
          type: 'error',
        }
      };
      console.log(error);
    };

    this.loginService.login(this.userName, this.password)
      .then(successHandler, errorHandler);


  }
}
