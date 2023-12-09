import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { FormikTextField } from "../../../../shared/components/formikTextField";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Divider, Stack } from "@mui/material";

export default function BasicInformationForm() {
  return (
    <>
      <Typography variant="h6">Basic Information</Typography>

      <Typography component="p" sx={{ pt: 0, pb: 2, color: "grey" }}>
        Overview and visual representation
      </Typography>

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
