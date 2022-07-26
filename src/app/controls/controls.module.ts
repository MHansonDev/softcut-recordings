import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button'
import { MatSliderModule } from '@angular/material/slider'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatCardModule } from '@angular/material/card'
import { MediaGroupComponent } from './media-group/media-group.component';
import { SanitizeEmbedPipe } from './media-group/sanitize-embed.pipe';
import { MediaPlayerComponent } from './media-player/media-player.component';
import { NavigatorComponent } from './navigator/navigator.component';

@NgModule({
  declarations: [
    MediaGroupComponent,
    NavigatorComponent,
    MediaPlayerComponent,
    SanitizeEmbedPipe
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MatMenuModule,
    MatListModule,
    MatIconModule,
    MatTabsModule,
    MatButtonModule,
    MatSliderModule,
    MatToolbarModule,
    MatCardModule
  ],
  exports: [
    NavigatorComponent,
    MediaGroupComponent,
    MediaPlayerComponent
  ]
})
export class ControlsModule { }
