import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";
import {HttpService} from "../services/http.service";
import {Router} from '@angular/router';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-album-selected',
  templateUrl: './album-selected.component.html',
  styleUrls: ['./album-selected.component.css']
})
export class AlbumSelectedComponent implements OnInit {
    public idAlbum:any;
    public album:any;
    public tracks:any;
    private token:any;
    private favorite:any;
  constructor(private _data:DataService, private _httpService:HttpService, private route:ActivatedRoute) {
    this.route.params.subscribe( params => this.idAlbum=params.id );
    this.favorite=JSON.parse(localStorage.getItem("favorites"));
    if(!this.favorite){
      this.favorite=[];
    }

   }

  ngOnInit() {
    
 
   this.token=this._data.getToken();
   if(this.idAlbum){
  
      this._httpService.getAlbumInfo(this.idAlbum, this.token).subscribe(
        res=>{
          this.tracks=res;
          this.tracks=this.tracks.tracks.items;
  
          this.album=res;
       
        
        },
        err=>console.log(err)
      )
      
   }else{
     this.album=[];
   }
  }
 addTrack(track, image, album){
   let favorite:any=localStorage.getItem("favorites");
   favorite=JSON.parse(favorite);
   if(!favorite){
     favorite=[];
   }
   let tracks={
     trackName: track.name,
     albumName: album,
    albumImage: image,
    duration: track.duration_ms,
    artistName: track.artists[0].name,
    trackId: track.id
   }
   favorite.push(tracks);
   this.favorite=favorite;
   favorite=JSON.stringify(favorite);
   localStorage.setItem("favorites", favorite);
   
   
 }
 favoriteInclude(track){
 let include=this.favorite.find(data=>data.trackName===track.name);
 
 if(include){
  return true;
 }else{
   return false;
 }
 }
 deleteSong(track){
  let favorite:any=localStorage.getItem("favorites");
  favorite=JSON.parse(favorite);
  favorite=favorite.filter(song=>track.name!==song.trackName);
  this.favorite=favorite;
  localStorage.setItem("favorites", JSON.stringify(favorite));


 }
}
