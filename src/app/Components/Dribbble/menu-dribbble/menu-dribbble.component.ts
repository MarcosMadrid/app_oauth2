import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-menu-dribbble',
  standalone: true,
  imports: [CommonModule,RouterOutlet ,RouterModule,],
  templateUrl: './menu-dribbble.component.html'
})
export class MenuDribbbleComponent {
  @Input() user: any;
  @Output() get_user: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    this.Check_User();
  }
  Check_User(){
    if(this.user == undefined)
      this.get_user.emit();
  }
}
