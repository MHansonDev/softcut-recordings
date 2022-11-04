import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ControlsModule } from '../controls/controls.module';
import { AudioComponent } from './audio/audio.component';
import { AudioService } from './audio/audio.service';
import { MaterialModule } from '../material.module';

const archiveRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'audio', component: AudioComponent },
]

@NgModule({
	declarations: [
		AudioComponent
	],
	imports: [
		CommonModule,
		BrowserModule,
		RouterModule.forChild(archiveRoutes),
		MaterialModule,
		ControlsModule
	],
	providers: [
		AudioService
	]
})
export class ArchiveModule { }
