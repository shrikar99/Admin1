import { BrowserModule } from '@angular/platform-browser';
import {FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from "ngx-spinner";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RequestListComponent } from './request-list/request-list.component';
import { SummaryShortenPipe } from '../app/request-list/summaryShorten.pipe';
import { RequestDetailsComponent } from './request-list/request-details/request-details.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {path: 'dashboard', component: RequestListComponent},
    {path: 'detail/:id', component: RequestDetailsComponent},
    {path: '**', component: PageNotFoundComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RequestListComponent,
    SummaryShortenPipe,
    RequestDetailsComponent,
    PageNotFoundComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NgbModule,
    NgxSpinnerModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
