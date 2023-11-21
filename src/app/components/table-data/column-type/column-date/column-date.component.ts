import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-column-date',
  templateUrl: './column-date.component.html',
  styleUrls: ['./column-date.component.scss']
})
export class ColumnDateComponent implements OnInit {

  @Input() timestamp: number = 1111111111;
  @Input() showTime: boolean = false;
  formattedDate: string = '';

  ngOnInit(): void {
    this.formatDate();
  }

  formatDate(): void {
    const date = new Date(this.timestamp);
    const day = this.padNumber(date.getDate());
    const month = this.padNumber(date.getMonth() + 1);
    const year = date.getFullYear();

    this.formattedDate = `${day}/${month}/${year}`;
    
    if (this.showTime) {
      const hours = this.padNumber(date.getHours());
      const minutes = this.padNumber(date.getMinutes());
      const seconds = this.padNumber(date.getSeconds());
      this.formattedDate += ` ${hours}:${minutes}:${seconds}`;
    }
  }

  padNumber(num: number): string {
    return num < 10 ? '0' + num : '' + num;
  }

}
