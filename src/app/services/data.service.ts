import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private token:string;
  private search:string;
  public id:string;
  private idAlbum:any;
  private imgAlbum:any;
  private albumName:any;
  private date:any;
  constructor() { 
   

  }
  putToken(token){
    this.token=token;
    window.sessionStorage.setItem("key", this.token);
  }
  getToken(){
    const key=window.sessionStorage.getItem("key");
    if(key){
      return key;
    } else{
      return false;
    }
  }
  getSearch(item){
    this.search=item;
  }
  getSearch2(){
    if(this.search){
      return this.search;
    }
  }
  putArtist(id){
    this.id=id;
  }
  getArtist(){
    return this.id;
  }
putAlbum(idAlbum, imgAlbum, albumName, date){
  this.idAlbum=idAlbum;
  this.imgAlbum=imgAlbum;
  this.albumName=albumName;
  this.date=date;

}
getAlbum(){
  return {
    idAlbum: this.idAlbum,
    imgAlbum: this.imgAlbum,
    albumName: this.albumName,
    date: this.date
  }
}

}
