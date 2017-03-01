import {NgModule} from '@angular/core';
import { AppComponent } from './components/app.component';
import {BrowserModule} from "@angular/platform-browser";
import {ExtraComponent} from "./components/extra.component";
import {ExampleAppModule} from "../exampleApp/exampleApp.module";

@NgModule(
    {
        imports: [BrowserModule, ExampleAppModule],
        declarations: [AppComponent, ExtraComponent],
        bootstrap: [AppComponent]
    }
)
export class AppModule{}