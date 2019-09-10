import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private url:string;
  constructor(  public _http: HttpClient) { 
    this.url = "https://accounts.spotify.com/en/authorize?client_id=08889519b4c24d199dcfa8a0c731c598&response_type=token&redirect_uri=http:%2F%2Flocalhost:8080%2Fset-token";

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
