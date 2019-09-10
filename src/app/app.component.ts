import { Component, OnInit, OnChanges } from '@angular/core';
import {DataService} from "./services/data.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  private token:any;
  public search:any;
  constructor(private _data:DataService, public router:Router){
   
  }
  ngOnInit(){

      if(!this._data.getToken()){
        this.router.navigate(["/home"]);
      }

    if(window.location.href.includes("set-token")){
      this.token= window.location.hash.split('=')[1];
      this._data.putToken(this.token);
      this.router.navigate(["/home"]); 
    }}
    ngOnChanges(){
      if(window.location.href.includes("album")||window.location.href.includes("artist")){
        this.search=true;
      }else{
        this.search=false;
      }
    }




  

}
