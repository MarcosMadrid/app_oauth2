import {AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-response-dribbble',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers:[],
  templateUrl: './response-dribbble.component.html'
})
export class ResponseDribbbleComponent implements AfterViewInit{
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