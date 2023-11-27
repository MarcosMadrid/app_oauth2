import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormGroup, FormsModule } from '@angular/forms';
import { SpotifyService } from '../../../Services/spotify.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-playlist',
  standalone: true,
  imports: [CommonModule,
            FormsModule,
            NgFor,
            NgIf
  ], 
  providers:[],
  templateUrl: './playlist.component.html',
  styleUrl: './playlist.component.css'
})
export class PlaylistComponent {
  playlists : any = [];
  constructor(private _serviceSpotify : SpotifyService, private domSanitizer: DomSanitizer){}

  Submit_Cuenta(form :  FormGroup<any>) {
    var user_id = form.value['user_id'];
    this.Get_Playlist(user_id);
  }

  Get_Playlist(user_id: string){
    var auth = localStorage.getItem('auth') ?? '';
    this._serviceSpotify.GET_Playlist(auth, user_id).
      then(response=>{
        localStorage.setItem('response', JSON.stringify(response));
        this.playlists = response.body['items'];
      });
  }

  urlSafe(url: any) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
