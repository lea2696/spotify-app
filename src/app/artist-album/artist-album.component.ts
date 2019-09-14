import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";
import {HttpService} from "../services/http.service";
import {Router} from '@angular/router';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-artist-album',
  templateUrl: './artist-album.component.html',
  styleUrls: ['./artist-album.component.css']
})
export class ArtistAlbumComponent implements OnInit {
  public id:any;
  public token:any;
  public albums:any;
  public tracksSelected:any;
  public imageSelected:any;
  public artist:any;
  constructor(private _data:DataService, private _httpService:HttpService, private router:Router, 
    private route:ActivatedRoute) { 
      this.route.params.subscribe( params => this.id=params.id );
    }

  ngOnInit() {
    this.token=this._data.getToken();
   if(this.id){
    this._httpService.getSearchAlbum(this.id, this.token).subscribe(
      res=>{

        this.albums=res.items;
      },
      err=>console.log(err)
    )
    this._httpService.getArtistInfo(this.id, this.token).subscribe(
      res=>{

        this.artist=res;
        

  
      },
      err=>console.log(err)
    )
   }


  }
  showTracks(idAlbum, img, albumName, date){
   
    this._data.putAlbum(idAlbum, img, albumName, date);
    this.router.navigate([`album/${idAlbum}`]);
  }

}
