import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { AuthModule } from './layouts/auth/auth.module';
import { DefaultModule } from './layouts/default/default.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    AuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
