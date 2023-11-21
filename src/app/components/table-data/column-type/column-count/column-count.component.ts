import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-column-count',
  templateUrl: './column-count.component.html',
  styleUrls: ['./column-count.component.scss'],
})
export class CountComponent implements OnInit {
  ngOnInit(): void {}

  @Input() data: any[] | number = [];
  @Input() propertyDisplayName: string = '';

  get count(): number {
    if (Array.isArray(this.data)) {
      return this.data.length;
    } else if (typeof this.data === 'number') {
      return this.data;
    } else {
      console.error('Invalid data type passed to CountDisplayComponent');
      return 0;
    }
  }
}
