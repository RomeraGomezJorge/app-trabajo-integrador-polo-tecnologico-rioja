import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { FormikTextField } from "../../../../shared/components/formikTextField";

export default function ContactForm() {
  return (
    <React.Fragment>
      <Typography variant="h6">
        Contact
      </Typography>
      <Typography component='p' sx={{ pt: 0, pb:2, color:'grey' }}>
        Means for user get in touch
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormikTextField label="Phone" field="phone" />
        </Grid>
        <Grid item xs={12}>
          <FormikTextField label="Email" field="email" type="email" />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
