import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked {
  routervalue : any;
  pagevalue : any;
  constructor(private route : ActivatedRoute){

  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngDoCheck(): void {
    console.log('ngdocheck');
  }
  ngOnChanges(changes: SimpleChanges): void {
console.log('ngonchanges');
  }

  ngOnInit(): void {
    this.routervalue = this.route.snapshot.paramMap.get('id');
    this.pagevalue = this.route.snapshot.paramMap.get('page');
    console.log(this.routervalue);
    console.log(this.pagevalue);
    console.log('ngoninit');

  }
}
