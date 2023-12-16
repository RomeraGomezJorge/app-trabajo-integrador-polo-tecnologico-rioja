import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  TextField,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { Field, useFormikContext } from "formik";
import { TitleGroupFieldDivider } from "../../../../shared/components/TitleGroupFieldDivider";
import { ILocation } from "../../locations.interface";

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

  const { values, touched, errors, handleChange, handleBlur } =
    useFormikContext<ILocation>();

  return (
    <>
      <TitleGroupFieldDivider
        primary="Additional Information"
        secondary="Contextual details to enriching the user expeirence"
      />

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            name="additional_info.website"
            type="url"
            label="Website"
            value={values.additional_info.website}
            error={
              touched.additional_info?.website &&
              Boolean(errors.additional_info?.website)
            }
            helperText={
              touched.additional_info?.website &&
              (errors.additional_info?.website as string)
            }
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl
            component="fieldset"
            error={
              touched.additional_info?.days_of_operation &&
              Boolean(errors.additional_info?.days_of_operation)
            }
          >
            <FormLabel component="legend" required>
              Days of operation
            </FormLabel>
            <FormGroup row>
              {daysOptions.map((day) => (
                <Field
                  as={FormControlLabel}
                  key={day.value}
                  name="additional_info.days_of_operation"
                  label={day.label}
                  value={day.value}
                  onBlur={handleBlur}
                  control={
                    <Checkbox
                      size="small"
                      checked={(
                        values.additional_info?.days_of_operation as string[]
                      )?.includes(day.value)}
                    />
                  }
                />
              ))}
            </FormGroup>
            <FormHelperText>
              {touched.additional_info?.days_of_operation &&
                (errors.additional_info?.days_of_operation as string)}
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Box component="fieldset" sx={{ mb: 2, borderColor: "lightgray" }}>
            <legend>Business hours</legend>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="additional_info.business_hours.opening"
                  type="time"
                  label="Opening"
                  value={values.additional_info.business_hours.opening}
                  error={
                    touched.additional_info?.business_hours?.opening &&
                    Boolean(errors.additional_info?.business_hours?.opening)
                  }
                  helperText={
                    touched.additional_info?.business_hours?.opening &&
                    (errors.additional_info?.business_hours?.opening as string)
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="additional_info.business_hours.closing"
                  type="time"
                  label="Closing"
                  value={values.additional_info.business_hours.closing}
                  error={
                    touched.additional_info?.business_hours?.closing &&
                    Boolean(errors.additional_info?.business_hours?.closing)
                  }
                  helperText={
                    touched.additional_info?.business_hours?.closing &&
                    (errors.additional_info?.business_hours?.closing as string)
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
              </Grid>
            </Grid>
          </Box>
          <Box component="fieldset" sx={{ mb: 2, borderColor: "lightgray" }}>
            <legend>Coordinates</legend>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="additional_info.coordinates.latitude"
                  type="number"
                  label="Latitude"
                  value={values.additional_info.coordinates.latitude}
                  error={
                    touched.additional_info?.coordinates?.latitude &&
                    Boolean(errors.additional_info?.coordinates?.latitude)
                  }
                  helperText={
                    touched.additional_info?.coordinates?.latitude &&
                    (errors.additional_info?.coordinates?.latitude as string)
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="additional_info.coordinates.longitude"
                  type="number"
                  label="Longitude"
                  value={values.additional_info.coordinates.longitude}
                  error={
                    touched.additional_info?.coordinates?.longitude &&
                    Boolean(errors.additional_info?.coordinates?.longitude)
                  }
                  helperText={
                    touched.additional_info?.coordinates?.longitude &&
                    (errors.additional_info?.coordinates?.longitude as string)
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
              </Grid>
            </Grid>
          </Box>
          <Box component="fieldset" sx={{ mb: 2, borderColor: "lightgray" }}>
            <legend>Social media</legend>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="additional_info.social_media.facebook"
                  type="url"
                  label="Facebook"
                  value={values.additional_info.social_media.facebook}
                  error={
                    touched.additional_info?.social_media?.facebook &&
                    Boolean(errors.additional_info?.social_media?.facebook)
                  }
                  helperText={
                    touched.additional_info?.social_media?.facebook &&
                    (errors.additional_info?.social_media?.facebook as string)
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="additional_info.social_media.twitter"
                  type="url"
                  label="Twitter"
                  value={values.additional_info.social_media.twitter}
                  error={
                    touched.additional_info?.social_media?.twitter &&
                    Boolean(errors.additional_info?.social_media?.twitter)
                  }
                  helperText={
                    touched.additional_info?.social_media?.twitter &&
                    (errors.additional_info?.social_media?.twitter as string)
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="additional_info.social_media.linkedin"
                  type="url"
                  label="Linkedin"
                  value={values.additional_info.social_media.linkedin}
                  error={
                    touched.additional_info?.social_media?.linkedin &&
                    Boolean(errors.additional_info?.social_media?.linkedin)
                  }
                  helperText={
                    touched.additional_info?.social_media?.linkedin &&
                    (errors.additional_info?.social_media?.linkedin as string)
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
