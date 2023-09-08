import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from  '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfileResolver } from './profile/profile-resolver.service';
import { SearchComponent } from './search/search.component';
import {MatPaginatorModule} from '@angular/material/paginator';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilterPipe } from './Pipes/filter.pipe';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { TokenInterceptorService } from './token-interceptor.service';


const routes: Routes = [
  { 
		path: '',
    component: HomepageComponent,
    data: { key: 'value as string' },
  },
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomepageComponent,
    ProfileComponent,
    SearchComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    AppRoutingModule,
    HttpClientModule, 
    BrowserAnimationsModule,
    ToastrModule.forRoot({timeOut:5000, progressBar: true, progressAnimation:'increasing', preventDuplicates: true}),
    [RouterModule.forRoot(routes)],
    NgMaterialModule,
    MatPaginatorModule,
  ],
  exports: [RouterModule],
  providers: [ ProfileResolver, {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
