export interface Props {
  label: string;
  input: {
    name: string;
    onChange: Function;
    value: string;
  };
  meta: {
    touched: boolean;
    error: string;
  };
  className?: string;
  disabled?: boolean;
  handleChange?: Function;
}