import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { SpotifyService } from '../../../Services/spotify.service';
import { FormGroup, FormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-search-cancion-spotify',
  standalone: true,
  imports: [CommonModule, FormsModule, NgFor],
  templateUrl: './search-cancion-spotify.component.html',
  styleUrl: './search-cancion-spotify.component.css'
})
export class SearchCancionSpotifyComponent {
  tracks : Array<any> = [];
  constructor(private _serviceSpotify : SpotifyService,  private domSanitizer: DomSanitizer){

  }

  Submit_Query(form: FormGroup<any>) {
    var auth : string = localStorage.getItem('auth') ?? '';
    var query = form.value['query']
    this._serviceSpotify.GET_SearchTrack(auth, query)
      .then((response : any)=>{
        this.tracks = response.body.tracks.items;
        localStorage.setItem('response', JSON.stringify(response));
      });
  }

  urlSafe(url: any) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
