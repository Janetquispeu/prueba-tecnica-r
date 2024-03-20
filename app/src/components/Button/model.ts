export interface Props {
  text?: string;
  variant: "text" | "outlined" | "contained";
  type?: "button" | "reset" | "submit";
  disabled?: boolean;
  className?: string;
  endIcon?: any;
  startIcon?: any;
  color?: "primary" | "secondary";
  sx?: object;
  onClick?: (e: any) => void;
}
