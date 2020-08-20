import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AutosizeModule} from 'ngx-autosize';
// import {AutosizeModule} from '../../projects/autosize/src/lib/autosize.module';
import { OnPushContainerComponent } from './on-push-container/on-push-container.component';
import { OnPushTextareaComponent } from './on-push-container/on-push-textarea/on-push-textarea.component';

@NgModule({
    declarations: [
        AppComponent,
        OnPushContainerComponent,
        OnPushTextareaComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AutosizeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
