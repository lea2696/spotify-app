import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ArtistComponent } from './artist/artist.component';
import { ArtistAlbumComponent } from './artist-album/artist-album.component';
import { AlbumSelectedComponent } from './album-selected/album-selected.component';
import { songDurationPipe } from "./pipes/songDuration.pipe"

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogInComponent,
    SearchBarComponent,
    ArtistComponent,
    ArtistAlbumComponent,
    AlbumSelectedComponent,
    songDurationPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
