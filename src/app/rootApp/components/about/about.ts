import {Component} from '@angular/core';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(private loginService: LoginService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  logoutButtonPressed() {
    console.log('logoutButtonPressed');
    this.loginService.logout();
  }
}
