import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorGuard } from './author.guard';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FirstComponent } from './DataCommunication/first/first.component';
import { SecondComponent } from './DataCommunication/second/second.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { Parent1Component } from './Introduction/parent1/parent1.component';
import { ChildComponent } from './product/child/child.component';
import { ParentComponent } from './product/parent/parent.component';
import { ProductComponent } from './product/product.component';
import { SampletestComponent } from './sampletest/sampletest.component';
import { StaffComponent } from './staff/staff.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'staf/:id/:name/:age', component:StaffComponent},
  {path:'stud', component:StudentComponent, canActivate: [AuthorGuard]},
  {path:'contact', component:ContactUsComponent, resolve: [AuthorGuard]},
  {path:'product', children:[
    {path:'', component:ProductComponent},
    {path:'child', component:ChildComponent},
    {path:'parent', component:ParentComponent}
  ]},
  {path: 'prnt', component:Parent1Component},
  {path:'first', component:FirstComponent},
  {path:'second', component:SecondComponent}, 
  {path:'sampletest', component:SampletestComponent},
  {
      path:'ug', loadChildren:()=>import('./ug/ug.module').then(mod=>mod.UgModule)
  },
  {
    path:'pg', loadChildren:()=>import('./pg/pg.module').then(mod=>mod.PgModule)
},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
