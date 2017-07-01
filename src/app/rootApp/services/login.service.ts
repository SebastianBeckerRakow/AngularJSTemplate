/**
 * login service for handling authentication issues
 */

import {Injectable} from '@angular/core';
import {Location} from '@angular/common';
import {AppService} from './app.service';
import {StorageService} from './storage.service';

const LOGIN_TOKEN = 'token';
const LOCAL_REMEMBERME_KEY = 'local_rememberme';
const LOCAL_USERNAME_KEY = 'local_username';

@Injectable()
export class LoginService {

  private token: any;
  private _currentUser: any = null;

  constructor(private location: Location, private appService: AppService, private storageService: StorageService) {
  }

  get currentUser(): any {
    return this._currentUser;
  }

  set currentUser(value: any) {
    this._currentUser = value;
  }

  public isLoggedIn(): boolean {
    this.token = this.storageService.getItem(LOGIN_TOKEN);

    // check for empty object with ES5+, but can be slow for big
    return (this.token !== null && Object.getOwnPropertyNames(this.token).length !== 0 );
  }

  public isReallyLoggedIn(): Promise<any> {

    const self = this;
    return new Promise((resolve, reject) => {
      if (!self.isLoggedIn()) {
        self.storageService.setItem(LOGIN_TOKEN, null);
        resolve(false);
      }

      const token = self.storageService.getItem(LOGIN_TOKEN);
      resolve(true);

    });
  }


  // we need it as a promise
  public login(userName?: string, password?: string): Promise<any> {

    const self = this;


    return new Promise((resolve, reject) => {

      self.token = '12345';
      self.currentUser = {};
      self.storageService.setItem(LOGIN_TOKEN, self.token);
      resolve();

    });
  };

  public logout(): void {
    console.log('logout');
    this.storageService.removeItem(LOGIN_TOKEN);
    this.token = null;
  }


  public getLocalUsername(): string {
    const user = this.storageService.getItem(LOCAL_USERNAME_KEY);
    if (user != null && user.length > 0) {
      return user;
    } else {
      return null;
    }
  }

  public setLocalUsername(user: string): void {
    this.storageService.setItem(LOCAL_USERNAME_KEY, user);
  }

  public getLocalRememberMe(): boolean {
    const rememberMe = this.storageService.getItem(LOCAL_REMEMBERME_KEY);
    if (rememberMe != null) {
      return rememberMe;
    } else {
      return false;
    }
  }

  public setLocalRememberMe(rememberMe: boolean): void {
    this.storageService.setItem(LOCAL_REMEMBERME_KEY, rememberMe);
  }
}
