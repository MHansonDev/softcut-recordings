import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CorderComponent } from '../gear/corder/corder.component';
import { KeystepComponent } from '../gear/keystep/keystep.component';
import { BrowserModule } from '@angular/platform-browser';
import { NeutronComponent } from '../gear/neutron/neutron.component';
import { NornsComponent } from '../gear/norns/norns.component';

const gearRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'corder', component: CorderComponent },
    { path: 'keystep', component: KeystepComponent },
    { path: 'neutron', component: NeutronComponent },
    { path: 'norns', component: NornsComponent }
]

@NgModule({
  declarations: [
    NeutronComponent,
    NornsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild(gearRoutes),
  ]
})
export class GearModule { }
