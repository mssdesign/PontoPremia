import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-column-cancel',
  templateUrl: './column-cancel.component.html',
  styleUrls: ['./column-cancel.component.scss']
})
export class ColumnCancelComponent {
  
  @Output() cancel = new EventEmitter<void>();

  onCancel() {
    this.cancel.emit();
  }
}
