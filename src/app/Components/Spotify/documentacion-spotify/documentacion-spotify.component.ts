import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuSpotifyComponent } from "../menu-spotify/menu-spotify.component";

@Component({
    selector: 'app-documentacion-spotify',
    standalone: true,
    templateUrl: './documentacion-spotify.component.html',
    imports: [CommonModule, MenuSpotifyComponent],
    styleUrl: './documentacion-spotify.component.css'
})
export class DocumentacionSpotifyComponent {

}
