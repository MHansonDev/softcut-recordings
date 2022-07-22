import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import { OscComponent } from './osc/osc.component';
import { CubaseComponent } from './cubase/cubase.component';

const gearRoutes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'cubase', component: CubaseComponent },
	{ path: 'osc', component: OscComponent },
]

@NgModule({
	declarations: [
	],
	imports: [
		CommonModule,
		BrowserModule,
		MatTabsModule,
		RouterModule.forChild(gearRoutes)
	]
})
export class SoftwareModule { }
