import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { NavigatorComponent } from './navigator/navigator.component';
import { HomeComponent } from './home/home.component';
import { NavigatorModule } from './navigator/navigator.module';
import { MatListModule } from '@angular/material/list';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent }
]

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        NavigatorComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        BrowserAnimationsModule,
        MatMenuModule,
        MatIconModule,
        MatListModule,
        NavigatorModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
