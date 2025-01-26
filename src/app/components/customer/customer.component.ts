import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-customer',
  imports: [RouterOutlet,MatButton,FormsModule,RouterLink],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent {
  userinput = '';

  cannavigate(){
    if(this.userinput!==''){
      if(confirm('If you navigating you data going to be lost, Do u want to continue?')){
        return true;
      }
    else{
      return false;
    }
    }
    else{
      return true;
    }
  }

}
