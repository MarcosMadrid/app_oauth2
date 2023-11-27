import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuSpotifyComponent } from '../menu-spotify/menu-spotify.component';
import { Router, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SpotifyService } from '../../../Services/spotify.service';
import { ResponseSpotifyComponent } from '../response-spotify/response-spotify.component';

@Component({
    selector: 'app-app-spotify',
    standalone: true,
    providers: [SpotifyService],
    templateUrl: './app-spotify.component.html',
    imports: [
      CommonModule, 
      RouterOutlet, 
      HttpClientModule, 
      MenuSpotifyComponent,
      ResponseSpotifyComponent
    ]
})
export class AppSpotifyComponent implements OnInit{
  protected response !: any
  protected user !: any
  protected auth !: any
  show_response : boolean = true;
  constructor( private router: Router, private _serviceSpotify : SpotifyService) {
  }

  ngOnInit() {
    this.auth = null;
    
    this.Is_Hide_Response();

    this.router.events.subscribe(val => {
      this.auth = localStorage.getItem('auth');
      this.Is_Hide_Response();
      this.updateComponent();
    });
  }

  updateComponent(){
    this.response = JSON.parse(localStorage.getItem('response') ?? '');
  }

  Get_User(){
    if(this.auth != null || this.user != null){
      this._serviceSpotify.GET_ActualUser(this.auth as string)
        .then((response : any)=>{
          this.user = response.body;
        });
    }
  }

  Is_Hide_Response(){
    if(window.location.href.includes('doc')){
      this.show_response = false;
    }else{
      this.show_response = true;
    }
  }

}
