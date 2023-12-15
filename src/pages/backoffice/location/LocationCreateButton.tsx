import AddCircleIcon from "@mui/icons-material/AddCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
} from "@mui/material";
import { Form, Formik } from "formik";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";
import * as yup from "yup";
import { ApiResponse, apiPost } from "../../../services/apiService";
import { Spinner } from "../../../shared/components/Spinner";
import AdditionalInformationForm from "./form/AdditionalInformationForm";
import AddressForm from "./form/AddressForm";
import BasicInformationForm from "./form/BasicInformationForm";
import ContactForm from "./form/ContactForm";
import { Location } from "./locations.hooks";

interface Props {
  incrementChangeCounter(): void;
}

interface ComponenteProps extends Props {
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
  postal_code: yup.number().required(),
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

export const LocationCreateButton = ({ incrementChangeCounter }: Props) => {
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
      {open && (
        <ModalCreate
          open={open}
          onClose={() => setOpen(false)}
          incrementChangeCounter={incrementChangeCounter}
        />
      )}
    </>
  );
};

const ModalCreate = ({
  open,
  onClose,
  incrementChangeCounter,
}: ComponenteProps) => {
  const [isLoading, setIsLoading] = useState(false);
    const createLocation = async (data: Location) => {
    setIsLoading(true);

    try {
      const response = await apiPost<ApiResponse>("/location", data);

      if (response?.status === "fail" && response?.message) {
        enqueueSnackbar(response.message, { variant: "error" });
      } else {
        incrementChangeCounter();
        enqueueSnackbar("Location created", { variant: "success" });
        onClose();
      }
    } catch (error: any) {
      enqueueSnackbar(error.message, { variant: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  return isLoading ? (
    <Spinner />
  ) : (
    <Dialog open={open} maxWidth="lg" fullWidth onClose={onClose}>
      <DialogTitle variant="h5" fontWeight="bold" textAlign="center">
        <Divider textAlign="center">Create Location</Divider>
      </DialogTitle>
      <Formik
        initialValues={{
          name: "",
          description: "",
          image: "",
          street: "",
          city: "",
          state: "",
          postal_code: "",
          country: "",
          phone: "",
          email: "",
          website: "",
          days_of_operation: [],
          opening: "",
          closing: "",
          latitude: 0,
          longitude: 0,
          facebook: "",
          twitter: "",
          linkedin: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, formikHelpers) => {
          createLocation({
            name: values.name,
            description: values.description,
            image: values.image,
            address: {
              street: values.street,
              city: values.city,
              state: values.state,
              postal_code: String(values.postal_code) ,
              country: values.country,
            },
            contact: {
              phone: values.phone,
              email: values.email,
            },
            additional_info: {
              website: values.website,
              days_of_operation: ["Monday", "Wednesday", "Friday"],
              business_hours: {
                opening: values.opening,
                closing: values.closing,
              },
              coordinates: {
                latitude: values.latitude,
                longitude: values.longitude,
              },
              social_media: {
                facebook: values.facebook,
                twitter: values.twitter,
                linkedin: values.linkedin,
              },
            },
          } as Location);
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
