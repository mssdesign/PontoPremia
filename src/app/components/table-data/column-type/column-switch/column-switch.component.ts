import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-column-switch',
  templateUrl: './column-switch.component.html',
  styleUrls: ['./column-switch.component.scss']
})
export class ColumnSwitchComponent {

  @Input() isActive = false;
  @Output() toggled = new EventEmitter<boolean>();

  toggle() {
    this.isActive = !this.isActive;
    this.toggled.emit(this.isActive);
  }
}
