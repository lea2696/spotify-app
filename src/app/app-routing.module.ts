import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { HomeComponent } from './home/home.component';
import { ArtistAlbumComponent } from './artist-album/artist-album.component';
import { AlbumSelectedComponent } from './album-selected/album-selected.component';


const routes: Routes = [
  {path: "", component: LogInComponent },
  {path: "artist/:id", component: ArtistAlbumComponent},
  {path: "album/:id", component: AlbumSelectedComponent},
  {path: "**", component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

    

}
