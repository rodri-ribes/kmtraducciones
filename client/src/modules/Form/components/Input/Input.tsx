import { TextField } from "@mui/material";
import { useField } from "formik";

interface Props {
  label: string;
  name: string;
  type: 'text' | 'email' | 'password' | 'textarea';
  [x: string]: any;
}

export const Input = ({label, ...props}: Props) => {

    const [field, meta] = useField(props);

    return (
      <TextField
        style={{ height: `${props.type === "textarea" ? "150px" : "70px"}` }}
        error={meta.error && meta.touched ? true : false}
        id={`
            ${
                props.type === "textarea"
                ? "outlined-multiline-static"
                : meta.error && meta.touched
                ? "standard-error-helper-text"
                : "outlined-required"
            }
        `}
        fullWidth
        label={label}
        multiline={props.type === "textarea"}
        rows={props.type === "textarea" ? 5 : 1}
        helperText={meta.touched && meta.error}
        {...field} 
        {...props}
        
      />
    );
  };
