import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useFormikContext } from "formik";
import { TitleGroupFieldDivider } from "../../../../shared/components/TitleGroupFieldDivider";
import { ILocation } from "../../locations.interface";

export default function ContactForm() {
  const { values, touched, errors, handleChange, handleBlur } =
    useFormikContext<ILocation>();
  return (
    <>
      <TitleGroupFieldDivider
        primary="Contact"
        secondary="Means for user get in touch"
      />
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <TextField
            fullWidth
            name="contact.phone"
            type="text"
            label="Phone"
            value={values.contact.phone}
            error={touched.contact?.phone && Boolean(errors.contact?.phone)}
            helperText={
              touched.contact?.phone && (errors.contact?.phone as string)
            }
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="contact.email"
            type="email"
            label="Email"
            value={values.contact.email}
            error={touched.contact?.email && Boolean(errors.contact?.email)}
            helperText={
              touched.contact?.email && (errors.contact?.email as string)
            }
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Grid>
      </Grid>
    </>
  );
}
