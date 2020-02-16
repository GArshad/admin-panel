import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-linear-chart',
  templateUrl: './linear-chart.component.html',
  styleUrls: ['./linear-chart.component.scss']
})
export class LinearChartComponent implements OnInit {
  categoryPercentage: number = 0.2;
  barPercentage: number = .50;
  borderRadius: number = 40;

  chartData: ChartDataset[] = [
    {
      // ⤵️ Add these
      label: 'Dato 1',
      data: [ 1551, 1688, 1800, 1895, 2124, 2124 ],
      backgroundColor:"#6adaa2",
      base:0,
      categoryPercentage:this.categoryPercentage,
      barPercentage:this.barPercentage,
      borderRadius:this.borderRadius,
      pointRadius:5,
    },
    {
      // ⤵️ Add these
      label: 'Dato 2',
      data: [ 1551, 1688, 1800, 1895, 2124, 2124 ],
      backgroundColor:"#8ff2f7",
      categoryPercentage:this.categoryPercentage,
      barPercentage:this.barPercentage,
      borderRadius:this.borderRadius
    },
    {
      // ⤵️ Add these
      label: 'Average',
      type:"line",
      data: [ 1560, 1788, 1700, 1995, 2324, 2424 ],
      borderColor:"#000000",
      pointBackgroundColor:"#FFFFFF",
      pointRadius:5,
      pointBorderColor:"#000000",
      pointBorderWidth:2
      //categoryPercentage:this.categoryPercentage,
      //barPercentage:this.barPercentage,
      //borderRadius:this.borderRadius
    },
  ];
  chartLabels: string[] = [ '2016 Revenue', '2017 Revenue', '2018 Revenue', '2019 Revenue', '2020 Revenue', '2021 Revenue' ];
  chartOptions: ChartOptions = {
    responsive:true,
    plugins:{
      legend:{
        position:"top",
        align:"end",
        labels:{
          usePointStyle: true,
          pointStyle:"circle",
          font:{
            //family,
            size:20,
            style:"normal",
            weight:"200",
          },
          color:"#889AB3",
          boxHeight:10,
          boxWidth:10
        },
      },
    },
    scales:{
      x:{
        grid:{
          borderDash:[5]
        },
        ticks:{
          font:{
            size:15,
            style:"normal",
          },
          color:"#B2B9C9"
        }
      },
      y:{
        grid:{
          borderDash:[5]
        },
        ticks:{
          font:{
            size:15,
            style:"normal",
          },
          color:"#B2B9C9"
        }
      }
    },
    layout:{
      padding:10
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
