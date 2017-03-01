/**
 * Created by sbeckerrakow on 28.02.2017.
 */
import {NgModule} from "@angular/core";
import {ExampleAppComponent} from "./components/exampleApp.component";
import {CommonModule} from "@angular/common";
@NgModule({
    imports: [CommonModule],
    declarations: [ExampleAppComponent],
    exports: [ExampleAppComponent]
})

export class ExampleAppModule {


}