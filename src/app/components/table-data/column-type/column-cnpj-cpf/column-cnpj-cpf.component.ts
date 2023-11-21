import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-column-cnpj-cpf',
  templateUrl: './column-cnpj-cpf.component.html',
  styleUrls: ['./column-cnpj-cpf.component.scss'],
})
export class ColumnCnpjCpfComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input() identifier: string = "Dados Inválidos!";

  get formattedIdentifier(): string {
    if (this.identifier && this.identifier.length === 14) {
      return `${this.identifier.substring(0, 2)}.${this.identifier.substring(2, 5)}.${this.identifier.substring(5, 8)}/${this.identifier.substring(8, 12)}-${this.identifier.substring(12, 14)}`;
    }
    else if (this.identifier && this.identifier.length === 11) {
      return `${this.identifier.substring(0, 3)}.${this.identifier.substring(3, 6)}.${this.identifier.substring(6, 9)}-${this.identifier.substring(9, 11)}`;
    }
    return this.identifier;
  }

}
