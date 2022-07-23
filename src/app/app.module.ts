import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { NavigatorModule } from './controls/navigator/navigator.module';
import { MatListModule } from '@angular/material/list';

import { HomeComponent } from './home/home.component';
import { NavigatorComponent } from './controls/navigator/navigator.component';
import { GearModule } from './gear/gear.module';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent }
]

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavigatorComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        BrowserAnimationsModule,
        MatMenuModule,
        MatIconModule,
        MatListModule,
        NavigatorModule,
        GearModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
