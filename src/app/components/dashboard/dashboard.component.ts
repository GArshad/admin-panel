import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  toggle = true;
  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize(): void{
    if(window.innerWidth<599){
      this.toggle=false;
    }else{
      this.toggle = true;
    }
  }

  ngOnInit(): void {
    this.onResize();
  }

  isToggled(value: boolean): void{
    this.toggle = !this.toggle;
  }

}
