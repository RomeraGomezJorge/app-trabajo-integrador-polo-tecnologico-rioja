import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid} from '@mui/material';
import {GridActionsCellItem} from '@mui/x-data-grid';
import {Form, Formik} from 'formik';
import {enqueueSnackbar} from 'notistack';
import {useState} from 'react';
import * as yup from 'yup';
import {apiPatch, ApiResponse} from '../../../services/apiService';
import {Spinner} from '../../../shared/components/Spinner';
import {Location} from '../locations.interface';
import AdditionalInformationForm from './form/AdditionalInformationForm';
import AddressForm from './form/AddressForm';
import BasicInformationForm from './form/BasicInformationForm';
import ContactForm from './form/ContactForm';

interface Props {
  incrementChangeCounter(): void;
  location: Location;
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

export const LocationEditCellItem = (props: Props) => {
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
      {open && (
        <ModalEdit open={open} onClose={() => setOpen(false)} {...props} />
      )}
    </>
  );
};

const ModalEdit = ({
  open,
  onClose,
  incrementChangeCounter,
  location,
}: ComponenteProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const updateLocation = async (id:string,data: Location) => {
    setIsLoading(true);

    try {
      const response = await apiPatch<ApiResponse,Location>(
        `/location/${id}`,
        data
      );

      if (response?.status === "fail" && response?.message) {
        enqueueSnackbar(response.message, { variant: "error" });
      } else {
        incrementChangeCounter();
        enqueueSnackbar("Location updated", { variant: "success" });
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
        <Divider textAlign="center">Edit Location</Divider>
      </DialogTitle>
      <Formik
        initialValues={{
          name: location.name,
          description: location.description,
          image: location.image,
          street: location.address.state,
          city: location.address.city,
          state: location.address.state,
          postal_code: location.address.postal_code,
          country: location.address.country,
          phone: location.contact.phone,
          email: location.contact.email,
          website: location.additional_info.website,
          days_of_operation: location.additional_info.days_of_operation,
          opening: location.additional_info.business_hours.opening,
          closing: location.additional_info.business_hours.closing,
          latitude: location.additional_info.coordinates.latitude,
          longitude: location.additional_info.coordinates.longitude,
          facebook: location.additional_info.social_media?.facebook ?? '',
          twitter: location.additional_info.social_media?.twitter ?? '',
          linkedin: location.additional_info.social_media?.linkedin ?? '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, formikHelpers) => {
          updateLocation(location._id,{
            name: values.name,
            description: values.description,
            image: values.image,
            address: {
              street: values.street,
              city: values.city,
              state: values.state,
              postal_code: String(values.postal_code),
              country: values.country,
            },
            contact: {
              phone: values.phone,
              email: values.email,
            },
            additional_info: {
              website: values.website,
              days_of_operation: values.days_of_operation,
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
