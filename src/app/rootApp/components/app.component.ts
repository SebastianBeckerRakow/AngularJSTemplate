import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {LoginPage} from './login/login';
import {AppService} from '../services/app.service'
import {AppModule} from '../app.module';


@Component({
  selector: 'app-root',
  templateUrl: '../app.html'
})
export class MyApp {

  rootPage: any = LoginPage;
  availableApps = AppModule.availableApps;

  constructor(private router: Router, private appService: AppService) {

    let routerConfig = router.config;
    console.log('Routes: ', JSON.stringify(routerConfig, undefined, 2));
    for (const app of this.availableApps) {
      const name = app.config.nameOnCard;
      const routes = app.config.routes
      console.log('Routes for ' + name + ': ', JSON.stringify(routes, undefined, 2));
      routerConfig = routes.concat(routerConfig);
    }

    console.log('Routes AFTER MERGE: ', JSON.stringify(routerConfig, undefined, 2));
    router.resetConfig(routerConfig);

  }
}
