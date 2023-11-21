import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { MiniTableConfig } from './models/mini-table-interfaces.interfaces';

@Component({
  selector: 'app-mini-generic-table',
  templateUrl: './mini-generic-table.component.html',
  styleUrls: ['./mini-generic-table.component.scss'],
})
export class MiniGenericTableComponent implements OnInit {
  @Input() items: any[] = [];
  @Input() label: string = '';
  @Input() config: MiniTableConfig = {
    columns: [],
  };

  ngOnInit() {}
  
}
