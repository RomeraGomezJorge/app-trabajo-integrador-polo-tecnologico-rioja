import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
} from "@mui/material";
import { Form, Formik } from "formik";
import * as React from "react";
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

export const LocationCreateButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="contained"
        startIcon={<AddCircleIcon />}
        onClick={() => setOpen(true)}
      >
        Create
      </Button>
      {open && <ModalCreate open={open} onClose={() => setOpen(false)} />}
    </>
  );
};

const ModalCreate = ({ open, onClose }: ComponenteProps) => {
  return (
    <Dialog open={open} maxWidth="lg" fullWidth onClose={onClose}>
      <DialogTitle variant="h5">Create location</DialogTitle>
      <Formik
        initialValues={{}}
        validationSchema={validationSchema}
        onSubmit={(values, formikHelpers) => {
          // crearBienTipo(values)
          formikHelpers.setSubmitting(false);
        }}
      >
        {({ dirty, isValid }) => (
          <Form noValidate >
            <DialogContent sx={{ paddingTop: 0 }}>
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
              <Button variant="outlined">Cancel</Button>
              <Button
                type="submit"
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
