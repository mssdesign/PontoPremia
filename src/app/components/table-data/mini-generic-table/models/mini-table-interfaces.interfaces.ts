export interface MiniTableColumn {
  label: string;
  property: string;
  isCustom: boolean;
  componentType: 'standard' | 'identifier' | 'money';
  flexValue: number;
}

export interface MiniTableConfig {
  columns: MiniTableColumn[];
}
