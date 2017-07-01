import {Injectable} from '@angular/core';
import {MessageService} from './message.service';

@Injectable()
export class AppService {

  public readonly messageService = new MessageService();

  constructor() {

  }

}

/*TODO:
 localization
 appInfo,
 features
 SDK,
 localStorage,

 */
