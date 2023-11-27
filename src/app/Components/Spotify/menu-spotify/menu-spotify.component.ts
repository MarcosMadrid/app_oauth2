import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-menu-spotify',
  standalone: true,
  imports: [CommonModule, RouterOutlet ,RouterModule, NgIf],
  templateUrl: './menu-spotify.component.html'
})
export class MenuSpotifyComponent implements OnInit{
  @Input() user: any;
  @Output() get_user: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    this.Check_User();
  }
  Check_User(){
    if(this.user == null)
      this.get_user.emit();
  }
}
