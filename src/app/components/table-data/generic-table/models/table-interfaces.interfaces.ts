export interface TableColumn {
  label: string;
  property: string;
  isCustom: boolean;
  componentType: 'standard' | 'switch' | 'actions' | 'cancel' | 'selector' | 'edit' | 'approveOrCancel' | 'date' | 'identifier' | 'money' | 'count';
  flexValue: number;
}

export interface TableConfig {
  columns: TableColumn[];
}
