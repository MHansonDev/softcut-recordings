import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ControlsModule } from '../controls/controls.module';
import { APIComponent } from './api-test/api-test.component';
import { MediaService } from './media.service';
import { MetalComponent } from './metal/metal.component';


const gearRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'metal', component: MetalComponent },
	{ path: 'api', component: APIComponent }
]

@NgModule({
	declarations: [
		MetalComponent,
		APIComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forChild(gearRoutes),
		ControlsModule
	],
	providers: [
		MediaService
	]
})
export class ArchiveModule { }
