import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GearModule } from '../../gear/gear.module';
import { SoftwareModule } from '../../software/software.module';
import { HomeComponent } from '../../home/home.component';
import { ArchiveModule } from 'src/app/archive/archive.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const navigationRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
]

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(navigationRoutes),
        GearModule,
        SoftwareModule,
        ArchiveModule,
        BrowserAnimationsModule
    ]
})
export class NavigatorModule { }
