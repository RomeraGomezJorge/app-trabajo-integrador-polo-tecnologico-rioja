import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { FormikTextField } from "../../../../shared/components/formikTextField";
import { TitleGroupField } from "../../../../shared/components/TitleGroupField";

export default function AddressForm() {
  return (
    <>
      <TitleGroupField
        primary="Address"
        secondary="Specifics about the physical location"
      />

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormikTextField label="Country" field="country" required />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormikTextField
            label="Postal code"
            field="postal_code"
            type="number"
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormikTextField label="State" field="state" required />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormikTextField label="City" field="city" required />
        </Grid>
        <Grid item xs={12} sm={12}>
          <FormikTextField label="Street" field="street" required />
        </Grid>
      </Grid>
    </>
  );
}
