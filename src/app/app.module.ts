import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { PeopleService } from './people.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GetPeopleModule } from './get-people/get-people.module';
import { PersonDetailsModule } from './person-details/person-details.module';
import { AddPersonModule } from './add-person/add-person.module';
import { UpdatePersonModule } from './update-person/update-person.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, GetPeopleModule, PersonDetailsModule, AddPersonModule, UpdatePersonModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    PeopleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
