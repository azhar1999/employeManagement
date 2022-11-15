import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeCompComponent } from './home-comp/home-comp.component';
import { HomeRoutingModule } from './home-routing.module';
import { AuthorisationService } from '../authorisation.service';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    HomeCompComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatGridListModule,
    MatCardModule,
  ],

  providers: [AuthorisationService],

})
export class HomeModule { }
