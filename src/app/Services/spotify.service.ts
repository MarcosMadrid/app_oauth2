import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private router: Router , private httpClient : HttpClient) {}

  Get_Auth( client_id : string){
    var redirect_uri = 'http://localhost:4200/spotify/oauth2';
    var scope = [
      'user-read-private',
      'user-read-email',
      'playlist-read-private', 
      'playlist-read-collaborative'
    ];

    var request = 'authorize?';
    let params = new HttpParams();
    params = params.append('response_type', 'code');
    params = params.append('client_id', client_id);
    params = params.append('scope', scope.join(' '));
    params = params.append('redirect_uri', redirect_uri);
    
    return(environment.urlSpotifyAPI_TOKEN + request + params);
  } 

  GET_TokenUser(auth : string, client_id : string, client_secret : string) : Promise<any>{
    var request : string = 'api/token';
    var redirect_uri = 'http://localhost:4200/spotify/oauth2';

    var body = new URLSearchParams();
    body.set('code', auth);
    body.set('grant_type', 'authorization_code');
    body.set('redirect_uri', redirect_uri);

    let headers = new HttpHeaders();
    headers = headers.append('content-type', 'application/x-www-form-urlencoded');
    headers = headers.append('Authorization','Basic ' + btoa(client_id + ':' + client_secret) );

    return(new Promise((resolve)=>{
      this.httpClient.post(environment.urlSpotifyAPI_TOKEN + request, body.toString() , {headers, observe: 'response'})
        .subscribe(response=>{
          resolve(response);
        });
    }));
  }

  GET_Playlist(auth : string, user_id : string) : Promise<any>{
    var request : string = '/v1/users/'+user_id+'/playlists';

    let headers = new HttpHeaders();
    headers = headers.append('Authorization','Bearer ' + auth);

    return(new Promise((resolve)=>{
      this.httpClient.get(environment.urlSpotifyAPI + request, {headers, observe: 'response', responseType: "json"})
        .subscribe(response=>{
          resolve(response);
        });
    }));
  }

  GET_ActualUser(auth : string){
    var request : string = '/v1/me';

    let headers = new HttpHeaders();
    headers = headers.append('Authorization','Bearer ' + auth); 

    return(new Promise((resolve)=>{
      this.httpClient.get(environment.urlSpotifyAPI + request, {headers, observe: 'response'})
        .subscribe(response=>{
          resolve(response);
        });
    }));
  }

  GET_SearchTrack(auth : string, query : string){
    var request : string = '/v1/search';

    let params = new HttpParams();
    params = params.append('q', query);
    params = params.append('type', 'track');

    let headers = new HttpHeaders();
    headers = headers.append('Authorization','Bearer ' + auth); 

    return(new Promise((resolve)=>{
      this.httpClient.get(environment.urlSpotifyAPI + request , {headers,params, observe: 'response'})
        .subscribe(response=>{
          resolve(response);
        });
    }));
  }
  
}
