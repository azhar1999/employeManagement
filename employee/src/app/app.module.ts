import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorisationService } from './authorisation.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { AuthGuardService } from './auth-guard.service';

import { LocalstorageService } from './localstorage.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  
  providers: [AuthorisationService,AuthGuardService,LocalstorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
