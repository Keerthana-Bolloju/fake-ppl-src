import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgxPaginationModule} from 'ngx-pagination';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api'; 
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PeopleDataComponent } from './home/people-data/people-data.component';
import { SearchDataComponent } from './home/search-data/search-data.component';
import { DataService } from './services/data.service';
import { PeopleDataService } from './services/people-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PeopleDataComponent,
    SearchDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    InMemoryWebApiModule.forRoot(DataService)
  ],
  providers: [PeopleDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
