import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { OscComponent } from './osc/osc.component';
import { CubaseComponent } from './cubase/cubase.component';
import { ControlsModule } from '../controls/controls.module';
import { MaterialModule } from '../material.module';

const gearRoutes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'cubase', component: CubaseComponent },
	{ path: 'osc', component: OscComponent },
]

@NgModule({
	declarations: [
		CubaseComponent,
		OscComponent
	],
	imports: [
		CommonModule,
		BrowserModule,
		RouterModule.forChild(gearRoutes),
		MaterialModule,
		ControlsModule
	]
})
export class SoftwareModule { }
