import {Component} from "@angular/core";

@Component({
    selector: 'exampleApp',
    template: `<h1>exampleApp {{test}}</h1>
    <button (click)="onClick($event)"></button>`
})

export class ExampleAppComponent{

    onClick(evt:Event) : void {
        console.log(evt);
    }
    test:string = 'test'
    constructor(){
        console.log("ExampleAppComponent");
    }
}