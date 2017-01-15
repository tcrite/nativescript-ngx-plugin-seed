import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular";
// angular 
import { NgModule } from "@angular/core";

import { DemoComponent } from './app.component';

import { TNSYourPluginModule } from "nativescript-ngx-yourplugin";


@NgModule({
    imports: [
      NativeScriptModule,
      TNSYourPluginModule
    ],
    declarations: [
      DemoComponent,      
    ],
    bootstrap: [
      DemoComponent
    ],
})
class DemoModule { }

platformNativeScriptDynamic().bootstrapModule(DemoModule);
