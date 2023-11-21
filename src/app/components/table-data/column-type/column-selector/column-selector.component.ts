import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-column-selector',
  templateUrl: './column-selector.component.html',
  styleUrls: ['./column-selector.component.scss'],
})
export class ColumnSelectorComponent implements OnInit {
  @Input() scoreMultipliers: number[] = [];
  @Input() selectedNumber: number = 5;
  @Output() valueSelected = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  selectValue(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const value = Number(selectElement.value);
    this.valueSelected.emit(value);
  }
  
}
