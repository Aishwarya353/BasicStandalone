import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';
import { ReversePipe } from './custom/reverse.pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatCardModule, HeaderComponent, FooterComponent, NavigationComponent, HomeComponent, CommonModule, ReversePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gBasics';
  today = new Date();
  salary = 100000;
  objects = {"name":"ang"}
  isdisabled = false;
}
//Commommodule is imported for pipes
//Matcardmodule for angular material cards
//Routeroutlet for routing purpose
//ReversePipe for custompipes
//Interpolation - consider it as string
//Property = considers exact datatype