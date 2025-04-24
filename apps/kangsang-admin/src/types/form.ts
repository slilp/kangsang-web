export enum InputTypeEnum {
  TEXT,
  NUMBER,
  DATETIME,
  CHECKBOX,
  SELECTION,
  FILE,
  IMAGE,
}

export interface IOptionSelection {
  id: string;
  label: string;
}

export interface IFormField {
  id: string;
  type: InputTypeEnum;
  title?: string;
  description?: string;
  placeholder?: string;
  options?: IOptionSelection[];
}
