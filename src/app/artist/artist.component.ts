import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {HttpService} from "../services/http.service";
import {DataService} from "../services/data.service";
import {Router} from '@angular/router';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit, OnChanges {
  @Input()  search:string;
  public search2:any
  public token:any;
  public artists:any;
  constructor(private _httpService:HttpService, private _data:DataService, private router:Router) { }

  ngOnInit() {
    this.search2=this._data.getSearch2();
    if(this.search2){
      this.token=this._data.getToken()
      this._httpService.getSearchArtist(this.search2, this.token).subscribe(
        res=>{
          this.artists=res.artists.items.filter(data=>data.name&&data.images[0]);
          
  
        },
        err=>{
          console.log(err);
        }
      )
    }

  }
  ngOnChanges(){
    if(this.search){
      this.token=this._data.getToken()
      this._httpService.getSearchArtist(this.search, this.token).subscribe(
        res=>{
          this.artists=res.artists.items.filter(data=>data.name&&data.images[0]);
          
  
        },
        err=>{
          console.log(err);
        }
      )
    }else{
      this.artists=[];
    }

   
  }
  showAlbum(id){

    this._data.putArtist(id);
    this.router.navigate([`/artist/${id}`]);
    
  }

}
