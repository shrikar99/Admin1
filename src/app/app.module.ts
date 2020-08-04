import { BrowserModule } from '@angular/platform-browser';
import {FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from "ngx-spinner";

import { AppComponent } from './app.component';
import { RequestDataService} from './data/data.service';
import { HeaderComponent } from './header/header.component';
import { RequestListComponent } from './request-list/request-list.component';
import { SummaryShortenPipe } from '../app/request-list/summaryShorten.pipe';
import { RequestDetailsComponent } from './request-list/request-details/request-details.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FilterComponent } from './filter/filter.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
// import { AppRoutingModule } from './app-routing.module'

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {path: 'dashboard', component: RequestListComponent},
    {path: 'dashboard/filter', component: FilterComponent},
    {path: 'dashboard/detail/:id', component: RequestDetailsComponent},
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
    FilterComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NgbModule,
    NgxSpinnerModule
    // AppRoutingModule
  ],
  providers: [
    RequestDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
