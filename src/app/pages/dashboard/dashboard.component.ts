import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './canvasjs.min';
//Il n'existe pas de packqge npm pour CanvasJS. 
//J'ai copier le fichier canvasjs.min (récupérer dans un tuto- canvasjs-charts-angular5) dans le component dashboard
import Chart from 'chart.js';

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";
import { AppService } from 'src/app/app.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

 /* public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;*/

  constructor(private appService: AppService) { }

  authenticated(){
    return this.appService.authenticated;
  }
  ngOnInit() {
    
    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Consulter les affaires en cours"
      },
      data: [{
        type: "column",
        dataPoints: [
          { y: 71, label: "1" },
          { y: 55, label: "2" },
          { y: 50, label: "3" }
         
        ]
      }]
    });
      
    chart.render();

    /*this.datasets = [
      [0, 20, 10, 30, 15, 40, 20, 60, 60],
      [0, 20, 5, 25, 10, 30, 15, 40, 40]
    ];
    this.data = this.datasets[0];


    var chartOrders = document.getElementById('chart-orders');

    parseOptions(Chart, chartOptions());


    var ordersChart = new Chart(chartOrders, {
      type: 'bar',
      options: chartExample2.options,
      data: chartExample2.data
    });

    var chartSales = document.getElementById('chart-sales');

    this.salesChart = new Chart(chartSales, {
			type: 'line',
			options: chartExample1.options,
			data: chartExample1.data
		});*/
  }





  /*public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }*/

}
