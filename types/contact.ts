export interface Field {
  type?: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  layout?: 'default' | 'big';
}

export interface ContactField {
  name: string;
  data: string;
}
