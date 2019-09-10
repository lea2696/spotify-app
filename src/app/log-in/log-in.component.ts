import { Component, OnInit } from '@angular/core';
import { HttpService }  from "../services/http.service"
import { DataService } from "../services/data.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  private token:any;

  constructor(private _http:HttpService, private _data:DataService, private router:Router) { }

  ngOnInit() {
    this.token=this._data.getToken();
    if(this.token){
      this.router.navigate(["/home"]);

    }

  }


    Authentication (){
      this._http.authenticate();
    }
}
