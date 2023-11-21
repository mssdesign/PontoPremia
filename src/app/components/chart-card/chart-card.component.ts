import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-chart-card',
  templateUrl: './chart-card.component.html',
  styleUrls: ['./chart-card.component.scss'],
})
export class ChartCardComponent implements OnInit {
  @Input() data: number[] = [];
  @Input() labels: string[] = [];
  @Input() borderColor: string = '';
  @Input() title: string = '';

  public chartType: ChartType = 'line';
  public chartData: {
    data: number[];
    borderColor: string;
    pointStyle: boolean;
    label: string;
    tension: number;
  }[] = [];
  public chartLabels: string[] = [];
  public chartOptions: any = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };
  public chartLegend: boolean = false;
  public percentage: string = '';

  ngOnInit(): void {
    this.chartData = [
      {
        data: this.data,
        borderColor: this.borderColor,
        pointStyle: false,
        label: this.title,
        tension: 0.4,
      },
    ];
    this.chartLabels = this.labels;
    this.calculatePercentage();
  }

  calculatePercentage(): void {
    const length = this.data.length;
    if (length >= 2) {
      const diff = this.data[length - 1] - this.data[length - 2];
      const percentChange = (diff / this.data[length - 2]) * 100;

      if (percentChange > 0) {
        this.percentage = `+ ${percentChange.toFixed(2)}%`;
      } else if (percentChange < 0) {
        this.percentage = `- ${Math.abs(percentChange).toFixed(2)}%`;
      } else {
        this.percentage = '0%';
      }
    } else {
      this.percentage = 'N/A';
    }
  }
}
