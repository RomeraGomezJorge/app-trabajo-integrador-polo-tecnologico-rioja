import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/material";
import { FormikTextField } from "../../../../shared/components/formikTextField";
import { FormikCheckBoxField } from "../../../../shared/components/FormikCheckBoxField";
import { TitleGroupField } from "../../../../shared/components/TitleGroupField";

export default function AdditionalInformationForm() {
  const daysOptions = [
    { label: "Monday", value: "Monday" },
    { label: "Tuesday", value: "Tuesday" },
    { label: "Wednesday", value: "Wednesday" },
    { label: "Thursday", value: "Thursday" },
    { label: "Friday", value: "Friday" },
    { label: "Saturday", value: "Saturday" },
    { label: "Sunday", value: "Sunday" },
  ];

  return (
    <>
      <TitleGroupField
        primary="Additional Information"
        secondary="Contextual details to enriching the user expeirence"
      />

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormikTextField label="Website" field="website" type="url" />
        </Grid>
        <Grid item xs={12}>
          <FormikCheckBoxField
            label="Days of operation"
            field="days_of_operation"
            options={daysOptions}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Box component="fieldset" sx={{ mb: 2, borderColor: "lightgray" }}>
            <legend>Business hours</legend>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <FormikTextField
                  label="Opening"
                  field="opening"
                  type="time"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormikTextField
                  label="Closing"
                  field="closing"
                  type="time"
                  required
                />
              </Grid>
            </Grid>
          </Box>
          <Box component="fieldset" sx={{ mb: 2, borderColor: "lightgray" }}>
            <legend>Coordinates</legend>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <FormikTextField
                  label="Latitude"
                  field="latitude"
                  type="number"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormikTextField
                  label="Longitude"
                  field="longitude"
                  type="number"
                  required
                />
              </Grid>
            </Grid>
          </Box>
          <Box component="fieldset" sx={{ mb: 2, borderColor: "lightgray" }}>
            <legend>Social media</legend>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormikTextField label="Facebook" field="facebook" type="url" />
              </Grid>
              <Grid item xs={12}>
                <FormikTextField label="Twitter" field="twitter" type="url" />
              </Grid>
              <Grid item xs={12}>
                <FormikTextField label="Linkedin" field="linkedin" type="url" />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
