import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-column-approve-cancel',
  templateUrl: './column-approve-cancel.component.html',
  styleUrls: ['./column-approve-cancel.component.scss']
})
export class ColumnApproveCancelComponent {
  
  @Output() approve = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  onApprove() {
    this.approve.emit();
  }

  onCancel() {
    this.cancel.emit();
  }
}
