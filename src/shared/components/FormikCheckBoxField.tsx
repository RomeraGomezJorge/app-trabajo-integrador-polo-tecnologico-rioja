import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from "@mui/material";
import { Field, useFormikContext } from "formik";
import { PropsWithChildren } from "react";

interface FormikCheckboxFieldProps<T> {
  label: string;
  field: keyof T;
  options: { label: string; value: string }[];
  required?: boolean;
}

export const FormikCheckBoxField = <T,>({
  label,
  field,
  options,
  required = false,
}: PropsWithChildren<FormikCheckboxFieldProps<T>>) => {
  const { values, touched, errors, handleBlur } = useFormikContext<T>();
  return (
    <FormControl
      component="fieldset"
      error={touched[field] && Boolean(errors[field])}
    >
      <FormLabel component="legend" required={required}>
        {label}
      </FormLabel>
      <FormGroup row>
        {options.map((option) => (
          <Field
            as={FormControlLabel}
            key={option.value}
            name={field as string}
            label={option.label}
            value={option.value}
            onBlur={handleBlur}
            control={
              <Checkbox
                size="small"
                checked={(values[field] as string[])?.includes(option.value)}
              />
            }
          />
        ))}
      </FormGroup>
      <FormHelperText>
        {touched[field] && (errors[field] as string)}
      </FormHelperText>
    </FormControl>
  );
};
