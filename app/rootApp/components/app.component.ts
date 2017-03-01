import {Component} from "@angular/core";

@Component({
    selector: 'app',
    templateUrl: './app/rootApp/components/app.component.html'
})
export class AppComponent{

    constructor(){
        console.log("App Component");
    }
}