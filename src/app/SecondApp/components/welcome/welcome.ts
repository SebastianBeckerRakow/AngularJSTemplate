import {Component} from '@angular/core';
import {FeatureService} from '../../../rootApp/services/feature.service';

@Component({
  selector: 'welcome-page',
  templateUrl: 'welcome.html'
})

export class WelcomePage {
  welcomeMessage: string;
  note: string;

  constructor(private featureService: FeatureService) {
    this.welcomeMessage = 'Lorem ipsum dolor sit amet, consetetur ' +
      'sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut ' +
      'labore et dolore magna aliquyam erat, sed diam voluptua. At ' +
      'vero eos et accusam et justo duo dolores et ea rebum.';

    this.note = 'The feature "communicationUseDummyData" is ' + (featureService.approvalAppUseDummyData ? 'enabled ' : 'disabled');
  }

}
