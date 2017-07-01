import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {WelcomePage} from './components/welcome/welcome';
import {ModuleConfiguration} from '../rootApp/app.module';

@NgModule(
  {
    declarations: [WelcomePage],

    entryComponents: [WelcomePage],

    imports: [RouterModule]
  }
)

export class FirstAppModule {
  public static config: ModuleConfiguration = {
    landingPage: ['firstApp'],
    nameOnCard: 'First App',
    imageOnCard: 'tbd',
    routes: [{
      path: 'firstApp',
      component: WelcomePage,
    }, {
      path: 'welcome',
      redirectTo: '/firstApp'
    }]
  };
}




