import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";
import {HttpService} from "../services/http.service";
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private token:any;
  private user:any;
  public search:string;
  public favorite:any;
  private audio:any;
  constructor(private _data:DataService, private _httpService:HttpService) {
    this.search=this._data.getSearch2();
    let favorite:any=localStorage.getItem("favorites");
    if(favorite){
      favorite=JSON.parse(favorite);
      this.favorite=favorite;

    }else{
      this.favorite=[]
    }
    
   }
  login(){
    this._httpService.authenticate();
  }
  ngOnInit() {
    this.token=this._data.getToken();
    this._httpService.getUser(this.token).subscribe(
      res=>{
       this.user=res;
      },
      err=>{
        window.sessionStorage.removeItem("key");
        this.token=false;
      }
      
    )
    let favorite:any=localStorage.getItem("favorites");
    if(favorite){
      favorite=JSON.parse(favorite);
      this.favorite=favorite;

    }

    
  }
  searchChange(search){
    this.search=search;
    this._data.getSearch(search);
  }
  eliminateTrack(track){
    let favorite:any=localStorage.getItem("favorites");
      favorite=JSON.parse(favorite);
     favorite=favorite.filter(trackSelect=>trackSelect.trackName!==track.trackName);
     this.favorite=favorite;
     favorite=JSON.stringify(favorite);
     localStorage.setItem("favorites", favorite);

      
    
  }
  playSong(track){
    this.audio=true;
    console.log(track.trackId);
    this._httpService.getSongInfo(track.trackId, this.token).subscribe(
      res=>{
 
        
        let audio:any =document.querySelector(".audio");
        let url:any={...res};
        url=url.preview_url;
        audio.src=url;
        audio.play();
   


      
      },
      err=>{
        console.log(err)
      }
    )
  }


}
