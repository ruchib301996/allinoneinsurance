import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PgCourceComponent } from './pg-cource/pg-cource.component';
import { PgStaffComponent } from './pg-staff/pg-staff.component';
import { PgStudentComponent } from './pg-student/pg-student.component';
import { PgHomeComponent } from './pg-home/pg-home.component';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/button';

const route:Routes=[
  {path:'', component:PgHomeComponent},
  {path:'pgstaff', component: PgStaffComponent},
  {path:'pgstud', component:PgStudentComponent},
  {path:'pgcource', component:PgCourceComponent}
]

@NgModule({
  declarations: [
    PgCourceComponent,
    PgStaffComponent,
    PgStudentComponent,
    PgHomeComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    [RouterModule.forChild(route)]
  ]
})
export class PgModule { }
