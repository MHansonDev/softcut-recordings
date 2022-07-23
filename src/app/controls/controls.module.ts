import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MediaGroupComponent } from './media-group/media-group.component';
import { SanitizeEmbedPipe } from './media-group/sanitize-embed.pipe';
import { NavigatorComponent } from './navigator/navigator.component';

@NgModule({
  declarations: [
    MediaGroupComponent,
    NavigatorComponent,
    SanitizeEmbedPipe
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MatMenuModule,
    MatListModule,
    MatIconModule,
    MatTabsModule
  ],
  exports: [
    NavigatorComponent,
    MediaGroupComponent
  ]
})
export class ControlsModule { }
