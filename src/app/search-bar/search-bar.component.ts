import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {HttpService} from "../services/http.service";
import { DataService } from"../services/data.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Output() searchChange = new EventEmitter();

  public item:string;

  constructor(private _data:DataService, _httpService:HttpService, private router:Router) {
    this.item="";

   }

  ngOnInit() {
    this.item=this._data.getSearch2();
  }
  newSearch(item){
  
      this._data.getSearch(item);
       this.searchChange.emit(item);

    if(window.location.href){
      this.router.navigate(["/home"])
    }

  }
}
