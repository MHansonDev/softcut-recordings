import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { GearModule } from '../../gear/gear.module';
import { SoftwareModule } from '../../software/software.module';

import { HomeComponent } from '../../home/home.component';

const navigationRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
]

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    RouterModule.forChild(navigationRoutes),
    GearModule,
    SoftwareModule,
  ]
})
export class NavigatorModule { }
