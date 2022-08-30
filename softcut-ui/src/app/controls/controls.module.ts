import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { MediaGroupComponent } from './media-group/media-group.component';
import { SanitizeEmbedHTMLPipe, SanitizeEmbedPipe } from './media-group/sanitize-embed.pipe';
import { MediaPlayerComponent } from './media-player/media-player.component';
import { NavigatorComponent } from './navigator/navigator.component';

@NgModule({
  declarations: [
    MediaGroupComponent,
    NavigatorComponent,
    MediaPlayerComponent,
    SanitizeEmbedPipe,
    SanitizeEmbedHTMLPipe
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    NavigatorComponent,
    MediaGroupComponent,
    MediaPlayerComponent
  ]
})
export class ControlsModule { }
