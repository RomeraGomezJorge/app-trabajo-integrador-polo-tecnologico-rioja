import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useFormikContext } from "formik";
import { TitleGroupFieldDivider } from "../../../../shared/components/TitleGroupFieldDivider";
import { ILocation } from "../../locations.interface";

export default function AddressForm() {
  const { values, touched, errors, handleChange, handleBlur } =
  useFormikContext<ILocation>();
  return (
    <>
      <TitleGroupFieldDivider
        primary="Address"
        secondary="Specifics about the physical location"
      />

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            name="address.country"
            type="text"
            label="Country"
            value={values.address.country}
            error={touched.address?.country && Boolean(errors.address?.country)}
            helperText={
              touched.address?.country && (errors.address?.country as string)
            }
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
            name="address.postal_code"
            type="text"
            label="Postal code"
            value={values.address.postal_code}
            error={touched.address?.postal_code && Boolean(errors.address?.postal_code)}
            helperText={
              touched.address?.postal_code && (errors.address?.postal_code as string)
            }
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="address.state"
            type="text"
            label="State"
            value={values.address.state}
            error={touched.address?.state && Boolean(errors.address?.state)}
            helperText={
              touched.address?.state && (errors.address?.state as string)
            }
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
            name="address.city"
            type="text"
            label="City"
            value={values.address.city}
            error={touched.address?.city && Boolean(errors.address?.city)}
            helperText={
              touched.address?.city && (errors.address?.city as string)
            }
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
        </Grid>
        <Grid item xs={12} sm={12}>
        <TextField
            name="address.street"
            type="text"
            label="Street"
            value={values.address.street}
            error={touched.address?.street && Boolean(errors.address?.street)}
            helperText={
              touched.address?.street && (errors.address?.street as string)
            }
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
        </Grid>
      </Grid>
    </>
  );
}
