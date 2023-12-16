import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Button, DialogActions, DialogContent, Grid } from "@mui/material";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { ILocation } from "../locations.interface";
import AdditionalInformationForm from "./form/AdditionalInformationForm";
import AddressForm from "./form/AddressForm";
import BasicInformationForm from "./form/BasicInformationForm";
import ContactForm from "./form/ContactForm";

interface Props {
  location?: ILocation;
  create?(location: ILocation): void;
  update?(location: ILocation, id: string): void;
  onClose(): void;
}

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  image: yup.string().url(),
  address: yup
    .object({
      street: yup.string().required().label('street'),
      city: yup.string().required().label('city'),
      state: yup.string().required().label('state'),
      postal_code: yup.string().required().label('postal code'),
      country: yup.string().required().label('country'),
    })
    .required(),
  contact: yup.object({
    phone: yup.string().label('phone'),
    email: yup.string().email().label('email'),
  }),
  additional_info: yup.object({
    website: yup.string().url().label('website'),
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
      .required().label('days of operation'),
    business_hours: yup
      .object({
        opening: yup
          .string()
          .required()
          .matches(
            /^([01]\d|2[0-3]):[0-5]\d$/,
            "Opening time should be in HH:MM format"
          )
          .label('opening')
          ,
        closing: yup
          .string()
          .required()
          .matches(
            /^([01]\d|2[0-3]):[0-5]\d$/,
            "Closing time should be in HH:MM format"
          )
          .label('closing')
          ,
      })
      .required(),
    coordinates: yup
      .object({
        latitude: yup.number().required().label('latitude'),
        longitude: yup.number().required().label('longitude'),
      })
      .required(),
    social_media: yup.object({
      facebook: yup.string().url().label('facebook'),
      twitter: yup.string().url().label('twitter'),
      linkedin: yup.string().url().label('linkedin'),
    }),
  }),
});

export const LocationForm = ({ location, create, update, onClose }: Props) => {
  const initialValues = {
    name: location?.name ?? "",
    description: location?.description ?? "",
    image: location?.image ?? "",
    address: {
      street: location?.address?.street ?? "",
      city: location?.address?.city ?? "",
      state: location?.address?.state ?? "",
      postal_code: location?.address?.postal_code ?? "",
      country: location?.address?.country ?? "",
    },
    contact: {
      phone: location?.contact?.phone ?? "",
      email: location?.contact?.email ?? "",
    },
    additional_info: {
      website: location?.additional_info?.website ?? "",
      days_of_operation: location?.additional_info?.days_of_operation ?? [
        "Monday",
      ],
      business_hours: {
        opening: location?.additional_info?.business_hours?.opening ?? "",
        closing: location?.additional_info?.business_hours?.closing ?? "",
      },
      coordinates: {
        latitude: location?.additional_info?.coordinates?.latitude ?? 0,
        longitude: location?.additional_info?.coordinates?.longitude ?? 0,
      },
      social_media: {
        facebook: location?.additional_info?.social_media?.facebook ?? "",
        twitter: location?.additional_info?.social_media?.twitter ?? "",
        linkedin: location?.additional_info?.social_media?.linkedin ?? "",
      },
    },
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, formikHelpers) => {
        if (update && location) {
          update(values as ILocation, location._id);
        }

        if (create) {
          create(values as ILocation);
        }

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
  );
};
