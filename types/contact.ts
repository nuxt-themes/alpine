export interface Field {
  type?: string;
  name: string;
  placeholder?: string;
  label?: string;
  required?: boolean;
}

export interface ContactField {
  name: string;
  data: string;
}
