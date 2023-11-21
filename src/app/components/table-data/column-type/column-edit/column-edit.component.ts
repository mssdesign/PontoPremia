import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-column-edit',
  templateUrl: './column-edit.component.html',
  styleUrls: ['./column-edit.component.scss']
})
export class ColumnEditComponent {
  
  @Output() edit = new EventEmitter<void>();

  onEdit() {
    this.edit.emit();
  }
}
