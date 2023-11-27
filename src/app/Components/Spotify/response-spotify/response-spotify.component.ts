import {AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-response-spotify',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers:[],
  templateUrl: './response-spotify.component.html'
})
export class ResponseSpotifyComponent implements AfterViewInit{
  @Input() response !: any
  @Output() updateComponent: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngAfterViewInit(){
    this.Reload_Component();
  }

  Reload_Component() {
    this.updateComponent.emit();
  }
}
  

