import { InputBaseComponentProps, TextField } from '@mui/material'
import { useFormikContext } from 'formik'
import { HTMLInputTypeAttribute, PropsWithChildren, useRef } from 'react'
import { useTimeout } from 'usehooks-ts'

interface FormikTextFieldProps<T> {
  label: string
  field: keyof T
  type?: HTMLInputTypeAttribute
  inputProps?: InputBaseComponentProps
  multiline?: boolean
  rows?: number
  autoFocus?: boolean
  required?: boolean
  size?: 'medium' | 'small' | undefined
}

export const FormikTextField = <T,>({
  label,
  field,
  type = 'text',
  inputProps = {},
  multiline = false,
  rows = 5,
  autoFocus = false,
  required = false,
  size = 'medium',
}: PropsWithChildren<FormikTextFieldProps<T>>) => {
  const { values, touched, errors, handleChange, handleBlur } = useFormikContext<T>()

  const inputRef = useRef<HTMLInputElement>(null)

  // Enfocar el componente luego de 100 ms si autoFucus = true
  useTimeout(() => {
    if (autoFocus) {
      inputRef.current?.focus()
    }
  }, 100)

  return (
    <TextField
      size={size}
      fullWidth
      id={field as string}
      name={field as string}
      type={type}
      label={label}
      inputProps={inputProps}
      multiline={multiline}
      rows={rows}
      inputRef={inputRef}
      value={values[field]}
      error={touched[field] && Boolean(errors[field])}
      helperText={touched[field] && (errors[field] as string)}
      onChange={handleChange}
      onBlur={handleBlur}
      required={required}
    />
  )
}
