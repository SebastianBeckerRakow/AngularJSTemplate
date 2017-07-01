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

export class SecondAppModule {
  public static config: ModuleConfiguration = {
    landingPage: ['secondApp'],
    nameOnCard: 'Second App',
    imageOnCard: 'tbd',
    routes: [{
      path: 'secondApp',
      component: WelcomePage,
    }, {
      path: 'welcome',
      redirectTo: '/secondApp'
    }]
  };
}




