import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { FormikTextField } from "../../../../shared/components/formikTextField";
import { TitleGroupField } from "../../../../shared/components/TitleGroupField";

export default function ContactForm() {
  return (
    <>
      <TitleGroupField
        primary="Contact"
        secondary="Means for user get in touch"
      />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormikTextField label="Phone" field="phone" />
        </Grid>
        <Grid item xs={12}>
          <FormikTextField label="Email" field="email" type="email" />
        </Grid>
      </Grid>
    </>
  );
}
