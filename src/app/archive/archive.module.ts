import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ControlsModule } from '../controls/controls.module';
import { MetalComponent } from './metal/metal.component';


const gearRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'metal', component: MetalComponent }
]

@NgModule({
	declarations: [
		MetalComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forChild(gearRoutes),
		ControlsModule
	],
	exports: [
	]
})
export class ArchiveModule { }
