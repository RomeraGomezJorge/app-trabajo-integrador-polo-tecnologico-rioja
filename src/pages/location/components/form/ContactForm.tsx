import Grid from "@mui/material/Grid";
import { TitleGroupFieldDivider } from "../../../../shared/components/TitleGroupFieldDivider";
import { FormikTextField } from "../../../../shared/components/formikTextField";

export default function ContactForm() {
  return (
    <>
      <TitleGroupFieldDivider
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
