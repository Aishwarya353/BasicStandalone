import { Component } from '@angular/core';
import { FormGroupDirective, FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { Loginmodel } from '../../models/Loginmdel';

@Component({
  selector: 'app-login',
  imports: [MatCard,MatCardHeader,MatCardContent,MatCardActions,MatFormFieldModule,MatButton,FormsModule,MatInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  _logindata:Loginmodel={
    username:'',
    password:''
  }
  ProcessedLogin(form:any):void{
    console.log(this._logindata);
  }
}
// core.mjs:6643  ERROR RuntimeError: NG01352: If ngModel is used within a form tag, either the name attribute must be set or the form
//     control must be defined as 'standalone' in ngModelOptions