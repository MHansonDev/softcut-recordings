import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ControlsModule } from '../controls/controls.module';
import { MaterialModule } from '../material.module';
import { APIComponent } from './api-test/api-test.component';
import { ElectronicComponent } from './electronic/electronic.component';
import { MediaService } from './media.service';
import { MetalComponent } from './metal/metal.component';

const gearRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'metal', component: MetalComponent },
    { path: 'electronic', component: ElectronicComponent },
	{ path: 'api', component: APIComponent }
]

@NgModule({
	declarations: [
		MetalComponent,
		ElectronicComponent,
		APIComponent
	],
	imports: [
		FormsModule,
		BrowserModule,
		RouterModule.forChild(gearRoutes),
		ControlsModule,
		MaterialModule
	],
	providers: [
		MediaService
	]
})
export class ArchiveModule { }
