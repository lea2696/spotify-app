import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private url:string;
  constructor(  public _http: HttpClient) { 
    //this.url = "https://accounts.spotify.com/authorize?client_id=0d42779c529943afac070ac8b82dca76&redirect_uri=https://spotify-app.netlify.com/&response_type=token";
    this.url=  'https://accounts.spotify.com/authorize?client_id=1d449aa39a5745a9b8cb38b6f69d7052&redirect_uri=http://localhost:8080/&response_type=token';

  }
  authenticate(){
    window.location.href=this.url;
};

getUser(token):Observable<any>{

  const httpHeader=new HttpHeaders({
    "Authorization": `Bearer ${token}`
  });


    return this._http.get(`https://api.spotify.com/v1/me`, {headers: httpHeader});
}
getSearchSongs(item, token):Observable<any>{

 const httpHeader=new HttpHeaders({
   "Authorization": `Bearer ${token}`
 });
     return this._http.get(`https://api.spotify.com/v1/search?q=${item}&type=track`, {headers: httpHeader});
}
getSearchArtist(item, token):Observable<any>{

 const httpHeader=new HttpHeaders({
   "Authorization": `Bearer ${token}`
 });
     return this._http.get(`https://api.spotify.com/v1/search?q=${item}&type=artist&limit=20`, {headers: httpHeader});

}
getSearchAlbum(item, token):Observable<any>{

  const httpHeader=new HttpHeaders({
    "Authorization": `Bearer ${token}`
  });
      return this._http.get(`https://api.spotify.com/v1/artists/${item}/albums`, {headers: httpHeader});
 
 }
 getAlbumTracks(item, token){
  const httpHeader=new HttpHeaders({
    "Authorization": `Bearer ${token}`
  });
      return this._http.get(`https://api.spotify.com/v1/albums/${item}/tracks`, {headers: httpHeader});
 

 }
 getAlbumInfo(item, token){
  const httpHeader=new HttpHeaders({
    "Authorization": `Bearer ${token}`
  });
      return this._http.get(`https://api.spotify.com/v1/albums/${item}`, {headers: httpHeader});
 }
 getArtistInfo(item, token){
  const httpHeader=new HttpHeaders({
    "Authorization": `Bearer ${token}`
  });
      return this._http.get(`https://api.spotify.com/v1/artists/${item}`, {headers: httpHeader});

 }
 getPlaylist(token){
  const httpHeader=new HttpHeaders({
    "Authorization": `Bearer ${token}`
  });


    return this._http.get(`https://api.spotify.com/v1/me/playlists`, {headers: httpHeader});

 }
 getSongInfo(item, token){
  const httpHeader=new HttpHeaders({
    "Authorization": `Bearer ${token}`
  });


    return this._http.get(`https://api.spotify.com/v1/tracks/${item}`, {headers: httpHeader});

 }
}
