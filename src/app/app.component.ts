import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MenuComponent } from './Components/menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
            CommonModule, 
            RouterOutlet, 
            MenuComponent,
            RouterModule
          ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app_oauth2';
  
}
