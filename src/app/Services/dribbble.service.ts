import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DribbbleService {
  constructor(private _http : HttpClient ) { 

  }
  GET_Auth(client_id : string){
    var request : string = '/oauth/authorize?';

    let params = new HttpParams();
    params = params.append('client_id', client_id);
    
    return(environment.urlDribbbleAPI_TOKEN + request + params);
  }

  GET_TokenUser(auth: any, client_id: string, client_secret: string) : Promise<any> {
    var request : string = '/oauth/token?';
    
    var body = new HttpParams();
    body = body.append('client_id', client_id);
    body = body.append('client_secret', client_secret);
    body = body.append('code', auth);
   
    console.log(environment.urlDribbbleAPI_TOKEN + request + body)
    
    return(new Promise((resolve)=>{
      this._http.post(environment.urlDribbbleAPI_TOKEN + request + body.toString(),"")
        .subscribe((response : any)=>{
          resolve(response);
        });
    }));
  }

  GET_ActualUser(access_token : string){
    var request : string = '/v2/user?';

    var body = new HttpParams();
    body = body.append('access_token', access_token);

    return(new Promise((resolve)=>{
      this._http.get(environment.urlDribbbleAPI + request + body.toString(), { observe: 'response'})
        .subscribe(response=>{
          resolve(response);
        });
    }));
  }
}
