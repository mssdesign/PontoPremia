import {
  Component,
  Input,
  Output,
  OnInit,
  SimpleChanges,
  EventEmitter,
} from '@angular/core';
import { TableConfig } from './models/table-interfaces.interfaces';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss'],
})
export class GenericTableComponent implements OnInit {
  itemsPerPage: number = 10;
  currentPage: number = 1;
  totalPages: number = 1;
  startIndex: number = 1;
  endIndex: number = this.itemsPerPage;
  pages: number[] = [];
  selectableNumbers: number[] = [10, 20, 30, 40, 50];
  displayedItems: any[] = [];
  @Input() items: any[] = [];
  @Input() config: TableConfig = {
    columns: [],
  };
  @Input() scoreMultipliers: number[] = [];
  @Input() showTime: boolean = false;
  @Input() selectedNumber: number = 2;
  @Output() toggleChange = new EventEmitter<{ item: any; value: boolean }>();
  @Output() editItem = new EventEmitter<any>();
  @Output() cancelItem = new EventEmitter<any>();
  @Output() approveItem = new EventEmitter<any>();
  @Output() deleteItem = new EventEmitter<any>();
  @Output() updateValue = new EventEmitter<any>();
  ngOnInit() {}

  propertyDisplayNames = {
    products: 'Produtos',
    timePeriod: 'Dias',
    categories: 'Categorias',
    worlds: 'Mundos',
    branches: 'Filiais'
  };

  getPropertyDisplayName(property: string): string {
    return this.propertyDisplayNames[property as keyof typeof this.propertyDisplayNames];
  }  

  ngOnChanges(changes: SimpleChanges) {
    if (changes['items']) {
      this.calculatePages();
      this.updateDisplayedItems();
    }
  }

  calculatePages() {
    this.totalPages = Math.ceil(this.items.length / this.itemsPerPage);
    this.pages = Array.from(
      { length: Math.min(this.totalPages, 6) },
      (_, i) => i + 1
    );
  }

  onItemsPerPageChange(event: any) {
    this.currentPage = 1;
    this.itemsPerPage = Number(event.target.value);
    this.updateDisplayedItems();
  }

  updateDisplayedItems() {
    this.calculatePages();

    this.startIndex = (this.currentPage - 1) * this.itemsPerPage + 1;
    this.endIndex = Math.min(
      this.currentPage * this.itemsPerPage,
      this.items.length
    );
    this.displayedItems = this.items.slice(this.startIndex - 1, this.endIndex);
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.updateDisplayedItems();
  }

  nextPageSet() {
    if (this.currentPage <= this.totalPages - 1) {
      this.currentPage += 1;
      this.calculatePages();
      this.updateDisplayedItems();
    } else {
      this.currentPage = 1;      
      this.calculatePages();
      this.updateDisplayedItems();
    }
  }

  handleToggle(item: any) {
    this.toggleChange.emit(item);
  }
  
  onEditItem(item: any) {
    this.editItem.emit(item);
  }

  onApproveItem(item: any) {
    this.approveItem.emit(item);
  }

  onCancelItem(item: any) {
    this.cancelItem.emit(item);
  }
  
  onDeleteItem(item: any) {
    this.deleteItem.emit(item);
  }

  onUpdateValue(selectedValue: number, item: any) {
    this.updateValue.emit({ selectedValue, item });
  }  
  
}
