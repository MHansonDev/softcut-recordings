import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSliderModule } from '@angular/material/slider'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatCardModule } from '@angular/material/card'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input'

@NgModule({
	imports: [
		MatButtonModule,
		MatMenuModule,
		MatListModule,
		MatIconModule,
		MatTabsModule,
		MatSliderModule,
		MatToolbarModule,
		MatCardModule,
        MatSidenavModule,
		MatInputModule
	],
	exports: [
		MatButtonModule,
		MatMenuModule,
		MatListModule,
		MatIconModule,
		MatTabsModule,
		MatSliderModule,
		MatToolbarModule,
		MatCardModule,
        MatSidenavModule,
		MatInputModule
	]
})
export class MaterialModule { }
