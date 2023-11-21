import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-column-money',
  templateUrl: './column-money.component.html',
  styleUrls: ['./column-money.component.scss']
})
export class ColumnMoneyComponent implements OnInit {

  ngOnInit(): void {}

  @Input() value: number = 0;

  get formattedValue(): string {
    return this.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

}
