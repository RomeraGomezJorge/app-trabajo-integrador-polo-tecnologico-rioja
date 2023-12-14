import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
} from "@mui/material";
import { GridActionsCellItem } from "@mui/x-data-grid";
import { Form, Formik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import AdditionalInformationForm from "./stepper/AdditionalInformationForm";
import AddressForm from "./stepper/AddressForm";
import BasicInformationForm from "./stepper/BasicInformationForm";
import ContactForm from "./stepper/ContactForm";

interface ComponenteProps {
  open: boolean;

  onClose(): void;
}

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  image: yup.string().url(),
  street: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  postal_code: yup.string().required(),
  country: yup.string().required(),
  phone: yup.string(),
  email: yup.string().email(),
  website: yup.string().url(),
  days_of_operation: yup
    .array()
    .of(
      yup
        .string()
        .oneOf([
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ])
    )
    .required(),
  opening: yup
    .string()
    .required()
    .matches(
      /^([01]\d|2[0-3]):[0-5]\d$/,
      "Opening time should be in HH:MM format"
    ),
  closing: yup
    .string()
    .required()
    .matches(
      /^([01]\d|2[0-3]):[0-5]\d$/,
      "Closing time should be in HH:MM format"
    ),
  latitude: yup.number().required(),
  longitude: yup.number().required(),
  facebook: yup.string().url(),
  twitter: yup.string().url(),
  linkedin: yup.string().url(),
});

export const LocationEditButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <GridActionsCellItem
        icon={
          <ModeEditIcon
            sx={{
              borderRadius: 8,
              backgroundColor: "blue",
              color: "white",
              fontSize: "1.5rem",
              p: 0.5,
            }}
            onClick={() => setOpen(true)}
          />
        }
        label="Edit"
      />
      {open && <ModalEdit open={open} onClose={() => setOpen(false)} />}
    </>
  );
};

const ModalEdit = ({ open, onClose }: ComponenteProps) => {
  return (
    <Dialog open={open} maxWidth="lg" fullWidth onClose={onClose}>
      <DialogTitle variant="h5" fontWeight="bold" textAlign="center">
        <Divider textAlign="center">Edit Location</Divider>
      </DialogTitle>
      <Formik // Error La propiedad "onSubmit" falta en el tipo "{ children: ({ dirty, isValid }: FormikProps<FormikValues>) => Element; initialValues: {}; validationSchema: ObjectSchema<{ name: string; description: string | undefined; ... 16 more ...; linkedin: string | undefined; }, AnyObject, { ...; }, "">; onubmit: () => void; }", pero es obligatoria en el tipo "FormikConfig<FormikValues>".ts(2741)
        initialValues={{}}
        validationSchema={validationSchema}
        onSubmit={(values,formikHelpers) => {
          // editar
          formikHelpers.setSubmitting(false);  
        }}
      >
        {({ dirty, isValid }) => (
          <Form noValidate>
            <DialogContent sx={{ paddingTop: 2 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <BasicInformationForm />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <AddressForm />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <AdditionalInformationForm />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <ContactForm />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button
                variant="outlined"
                startIcon={<CancelIcon />}
                onClick={() => onClose()}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                startIcon={<CheckCircleIcon />}
                variant="contained"
                disabled={!dirty || !isValid}
              >
                Save
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};
