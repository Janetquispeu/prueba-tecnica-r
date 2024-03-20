export interface Props {
  label: string;
  input: {
    onChange: Function;
    value: string;
  };
  meta: {
    touched: boolean;
    error: string;
  };
  listOptions: {
    id: string;
    label: string;
    value: string;
  }[];
  labelOption: string;
  keyOption?: string;
  valueOption?: string;
  disabled?: boolean;
  onChangeSelect?: Function;
  objectKeyOption?: boolean;
  className?: string;
  sx?: object;
  menuProps?: Object;
}