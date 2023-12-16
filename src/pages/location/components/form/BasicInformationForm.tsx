import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useFormikContext } from "formik";
import { TitleGroupFieldDivider } from "../../../../shared/components/TitleGroupFieldDivider";
import { ILocation } from "../../locations.interface";

export default function BasicInformationForm() {
  const { values, touched, errors, handleChange, handleBlur } =
  useFormikContext<ILocation>();  

  return (
    <>
      <TitleGroupFieldDivider
        primary="Basic Information"
        secondary="Overview and visual representation"
      />

      <Grid container spacing={3}>
        <Grid item xs={12}>
        <TextField
            name="name"
            type="text"
            label="Name"
            value={values.name}
            error={
              touched.name &&
              Boolean(errors.name)
            }
            helperText={
              touched.name &&
              (errors.name as string)
            }   
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />          
        </Grid>
        <Grid item xs={12}>
        <TextField
            name="description"
            type="text"
            label="Description"
            value={values.description}
            error={
              touched.description &&
              Boolean(errors.description)
            }
            helperText={
              touched.description &&
              (errors.description as string)
            }            
            onChange={handleChange}
            onBlur={handleBlur}
            rows={3}
            multiline={true}
          />          
        </Grid>
        <Grid item xs={12}>
        <TextField
            name="image"
            type="url"
            label="Image Url"
            value={values.image}
            error={
              touched.image &&
              Boolean(errors.image)
            }
            helperText={
              touched.image &&
              (errors.image as string)
            }  
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />        
        </Grid>
      </Grid>
    </>
  );
}
