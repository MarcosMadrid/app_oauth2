import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule } from '@angular/forms';
import { SpotifyService } from '../../../Services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-spotify-oauth2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './spotify-oauth2.component.html',
  styleUrl: './spotify-oauth2.component.css'
})
export class SpotifyOauth2Component implements OnInit{
  constructor( private _serviceSpotify : SpotifyService, private _activeRoute : ActivatedRoute){
   
  }
  Submit_IdClient(form: FormGroup<any>) {
    if(form.invalid)
      return
    form.value
    localStorage.setItem('client_id', form.value['client_id']);
    localStorage.setItem('client_secret', form.value['client_secret']);

    document.location.href = this._serviceSpotify.Get_Auth(form.value['client_id']);
  }

  ngOnInit(): void {
    var token = this._activeRoute.snapshot.queryParamMap.get('code') ?? '';
    if(token != ''){
      var client_id = localStorage.getItem('client_id') ?? '';
      var client_secret =  localStorage.getItem('client_secret') ?? '';
  
      this._serviceSpotify.GET_TokenUser(token, client_id, client_secret)
        .then(response=>{
          localStorage.setItem('response', JSON.stringify(response));
          localStorage.setItem('auth', response.body['access_token']);
          var auth = localStorage.getItem('auth');
          if(auth != null){
            console.log(auth)
            this._serviceSpotify.GET_ActualUser(auth as string)
              .then(response=>{
                localStorage.setItem('user', JSON.stringify(response));
              });
          }
        });
    }
  }

}
