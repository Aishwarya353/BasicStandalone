import { Component } from '@angular/core';

@Component({
  selector: 'app-template-forms',
  imports: [],
  templateUrl: './template-forms.component.html',
  styleUrl: './template-forms.component.scss'
})
export class TemplateFormsComponent {

  formSubmit(event : any):void{
    event.preventDefault();
    console.log("Submitted");
    // Logging the form and its inputs
    const form = event.target as HTMLFormElement;  // Casting event.target to HTMLFormElement
    
    console.log("Form Submitted");

    // Log all form field names and values
    Array.from(form.elements).forEach((element: any) => {
      if (element.name) {
        console.log(`${element.name}: ${element.value}`);
      }
    });  }
}
