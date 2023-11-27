import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NgModel } from '@angular/forms';
import { DribbbleService } from '../../../Services/dribbble.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-oauth2-dribbble',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './oauth2-dribbble.component.html',
  styleUrl: './oauth2-dribble.component.css'
})
export class Oauth2DribbbleComponent {

  constructor(private _serviceDribble : DribbbleService,  private _activeRoute : ActivatedRoute){
    
  }

  Submit_IdClient(form: FormGroup<any>) {
    if(form.invalid)
      return
  
    localStorage.setItem('client_id', form.value['client_id']);
    localStorage.setItem('client_secret', form.value['client_secret']);

    document.location.href = this._serviceDribble.GET_Auth(form.value['client_id']);
  }

  ngOnInit(): void {
    var auth = this._activeRoute.snapshot.queryParamMap.get('code') ?? '';
    if(auth != ''){
      var client_id = localStorage.getItem('client_id') ?? '';
      var client_secret =  localStorage.getItem('client_secret') ?? '';
      console.log(auth, client_id, client_secret)
      // this._serviceDribble.GET_TokenUser(auth, client_id, client_secret)
      //   .then(response=>{
      //     console.log(response.body.access_token);
      //     localStorage.setItem('response', JSON.stringify(response));
      //     localStorage.setItem('token',response.body.access_token);
      //   });
      localStorage.setItem('token','ff5b3414e5393efcf96e2093bcecd5741bfe2b3aa4ff09456e11f90df1e7cc77');
    }
  }

}
