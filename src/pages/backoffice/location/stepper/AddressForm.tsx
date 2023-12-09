import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { FormikTextField } from "../../../../shared/components/formikTextField";

export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Address
      </Typography>
      <Typography component="p" sx={{ pt: 0, pb: 2, color: "grey" }}>
        Specifics about the physical location
      </Typography>
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
    </React.Fragment>
  );
}
