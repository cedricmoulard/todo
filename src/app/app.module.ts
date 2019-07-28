import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { environment } from '../environments/environment';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsDispatchPluginModule } from '@ngxs-labs/dispatch-decorator';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxsModule.forRoot([], {developmentMode: !environment.production}),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsDispatchPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
