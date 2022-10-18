import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { StudentComponent } from './student/student.component';
import { StaffComponent } from './staff/staff.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductComponent } from './product/product.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ParentComponent } from './product/parent/parent.component';
import { ChildComponent } from './product/child/child.component';
import {HttpClientModule} from '@angular/common/http';
import {ButtonModule} from 'primeng/button';
import { Parent1Component } from './Introduction/parent1/parent1.component';
import { Child1Component } from './Introduction/parent1/child1/child1.component';
import { SampletestComponent } from './sampletest/sampletest.component';
import { TestcompComponent } from './testcomp/testcomp.component';

// import {AccordionModule} from 'primeng/accordion';
// import {MenuItem} from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    StudentComponent,
    StaffComponent,
    ContactUsComponent,
    ProductComponent,
    AboutUsComponent,
    ParentComponent,
    ChildComponent,
    Parent1Component,
    Child1Component,
    SampletestComponent,
    TestcompComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule
    // AccordionModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(){
  //   console.log('Cunstructor Module loaded')
  // }
 }
