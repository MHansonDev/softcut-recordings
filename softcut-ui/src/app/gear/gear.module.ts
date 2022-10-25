import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ControlsModule } from '../controls/controls.module';
import { CorderComponent } from './corder/corder.component';
import { KeystepComponent } from './keystep/keystep.component';
import { NeutronComponent } from './neutron/neutron.component';
import { NornsComponent } from './norns/norns.component';
import { MaterialModule } from '../material.module';
import { HellraiserComponent } from './hellraiser/hellraiser.component';
import { PO12Component } from './po-12/po-12.component';

const gearRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'corder', component: CorderComponent },
    { path: 'keystep', component: KeystepComponent },
    { path: 'neutron', component: NeutronComponent },
    { path: 'norns', component: NornsComponent },
    { path: 'hellraiser', component: HellraiserComponent },
    { path: 'po-12', component: PO12Component }
]

@NgModule({
    declarations: [
        NeutronComponent,
        NornsComponent,
        KeystepComponent,
        CorderComponent,
        HellraiserComponent,
        PO12Component
    ],
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forChild(gearRoutes),
        MaterialModule,
        ControlsModule,
    ],
})
export class GearModule { }
