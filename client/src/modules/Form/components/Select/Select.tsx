import { FormControl, FormHelperText, InputLabel, MenuItem, Select as SelectMaterial } from "@mui/material";
import { useField } from "formik";

interface Props {
  label: string;
  name: string;
  options: {
    value: string;
    label: string;
  }[];
  type: 'text' | 'email' | 'password' | 'textarea';
  placeholder: string;
  [x: string]: any;
}

export const Select = ({label, options, ...props}: Props) => {

    const [field, meta] = useField(props);

    return (
      <FormControl variant="outlined" error={meta.error ? true : false}>
        <InputLabel id={`demo-simple-select-${meta.error ? "error" : "outlined"}-label`}>{label}</InputLabel>
        <SelectMaterial
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label={label}
          {...field}
          {...props}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {
            options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))
          }
        </SelectMaterial>
        {
          meta.error && meta.touched && (
            <FormHelperText error>
              {meta.error}
            </FormHelperText>
          )
        }
      </FormControl>
    );
  };
