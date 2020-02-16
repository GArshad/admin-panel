import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './general-dashboard.component.html',
  styleUrls: ['./general-dashboard.component.scss']
})
export class GeneralDashboardComponent implements OnInit {

  array: number[] = [1,1,1];
  constructor() { }

  ngOnInit(): void {
  }

}
