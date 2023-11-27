import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AppSpotifyComponent } from './Components/Spotify/app-spotify/app-spotify.component';
import { SpotifyOauth2Component } from './Components/Spotify/spotify-oauth2/spotify-oauth2.component';
import { PlaylistComponent } from './Components/Spotify/playlist/playlist.component';
import { DocumentacionSpotifyComponent } from './Components/Spotify/documentacion-spotify/documentacion-spotify.component';
import { SearchCancionSpotifyComponent } from './Components/Spotify/search-cancion-spotify/search-cancion-spotify.component';
import { AppDribbbleComponent } from './Components/Dribbble/app-dribbble/app-dribbble.component';
import { Oauth2DribbbleComponent } from './Components/Dribbble/oauth2-dribbble/oauth2-dribbble.component';
import { DocumentacionDribbbleComponent } from './Components/Dribbble/documentacion-dribbble/documentacion-dribbble.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"dribbble",component:AppDribbbleComponent,
        children:[
            {path:"doc",component:DocumentacionDribbbleComponent},
            {path:"oauth2",component:Oauth2DribbbleComponent}
        ]
    },
    {path:"spotify",component:AppSpotifyComponent,
        children:[
            {path:"doc",component:DocumentacionSpotifyComponent},
            {path:"oauth2",component:SpotifyOauth2Component},
            {path:"playlist",component:PlaylistComponent},
            {path:"search",component:SearchCancionSpotifyComponent}
        ]
    },
];
