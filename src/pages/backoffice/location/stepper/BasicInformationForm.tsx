import Grid from "@mui/material/Grid";
import { FormikTextField } from "../../../../shared/components/formikTextField";
import { TitleGroupField } from "../../../../shared/components/TitleGroupField";

export default function BasicInformationForm() {
  return (
    <>
      <TitleGroupField
        primary="Basic Information"
        secondary="Overview and visual representation"
      />

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormikTextField label="Name" field="name" required />
        </Grid>
        <Grid item xs={12}>
          <FormikTextField label="Description" field="description" required />
        </Grid>
        <Grid item xs={12}>
          <FormikTextField label="Image url" field="image" type="url" />
        </Grid>
      </Grid>
    </>
  );
}
