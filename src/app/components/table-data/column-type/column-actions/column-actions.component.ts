import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-column-actions',
  templateUrl: './column-actions.component.html',
  styleUrls: ['./column-actions.component.scss']
})
export class ColumnActionsComponent {
  
  @Output() edit = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();

  onEdit() {
    this.edit.emit();
  }

  onDelete() {
    this.delete.emit();
  }
}
