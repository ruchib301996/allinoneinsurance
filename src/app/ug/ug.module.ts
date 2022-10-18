import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UgStaffComponent } from './ug-staff/ug-staff.component';
import { UgStudentComponent } from './ug-student/ug-student.component';
import { UgCourceComponent } from './ug-cource/ug-cource.component';
import { UgHomeComponent } from './ug-home/ug-home.component';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/button';

const route:Routes=[
  {path:'', component:UgHomeComponent},
  {path:'ugstaff', component: UgStaffComponent},
  {path:'ugstud', component:UgStudentComponent},
  {path:'ugcource', component:UgCourceComponent}
]

@NgModule({
  declarations: [
    UgStaffComponent,
    UgStudentComponent,
    UgCourceComponent,
    UgHomeComponent,    
  ],
  imports: [
    CommonModule,
    ButtonModule,
    [RouterModule.forChild(route)]
  ]
})
export class UgModule { }
