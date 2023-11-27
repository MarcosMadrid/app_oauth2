import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { MenuDribbbleComponent } from '../menu-dribbble/menu-dribbble.component';
import { DribbbleService } from '../../../Services/dribbble.service';
import { HttpClientModule } from '@angular/common/http';
import { ResponseDribbbleComponent } from '../response-dribbble/response-dribbble.component';

@Component({
  selector: 'app-app-dribbble',
  standalone: true,
  imports: [
    CommonModule,
    MenuDribbbleComponent,
    ResponseDribbbleComponent,
    RouterOutlet,
    HttpClientModule
  ],
  providers:[DribbbleService],
  templateUrl: './app-dribbble.component.html'
})
export class AppDribbbleComponent {
  response: any;
  show_response: boolean = true;
  user: any;
  token: any;
  
  constructor(private _serviceDribble : DribbbleService,  private router: Router,){
    
  }
  ngOnInit() {
    this.token = null;
    
    this.Is_Hide_Response();

    this.router.events.subscribe(val => {
      this.token = localStorage.getItem('token');
      this.Is_Hide_Response();
      this.updateComponent();
    });
  }

  updateComponent() {
    this.response = JSON.parse(localStorage.getItem('response') ?? '');
  }

  Is_Hide_Response(){
    if(window.location.href.includes('doc')){
      this.show_response = false;
    }else{
      this.show_response = true;
    }
  }

  Get_User(){
    if(this.token != null || this.user != null){
      console.log(this.token)
      this._serviceDribble.GET_ActualUser(this.token as string)
        .then((response : any)=>{
          this.user = response.body;
        });
    }
  }
}
