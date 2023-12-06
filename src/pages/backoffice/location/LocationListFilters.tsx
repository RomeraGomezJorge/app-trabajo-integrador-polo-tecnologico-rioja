import CancelIcon from "@mui/icons-material/Cancel";
import SearchIcon from "@mui/icons-material/Search";
import { Button, Grid } from "@mui/material";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { FormikTextField } from "../../../shared/components/formikTextField";
import { UseLocationsQuery } from "./locations.hooks";

const validationSchema = yup.object().shape({
  filter: yup.string().nullable(),
});

export interface Props {
  filter: UseLocationsQuery;
  setFilter(values: UseLocationsQuery): void;
}

export const LocationListFilter = ({ filter, setFilter }: Props) => {
  return (
    <Grid item xs={12}>
      <Formik
        initialValues={filter}
        validationSchema={validationSchema}
        enableReinitialize
        onSubmit={(values, formikHelpers) => {
          setFilter({
            name: values.name,
          });
          formikHelpers.setSubmitting(false);
        }}
      >
        {({ dirty, isValid }) => (
          <Form>
            <Grid container alignItems="center" spacing={2}>
              <Grid item xs={12} sm={4}>
                <FormikTextField
                  label="Search by name"
                  field="name"
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={8}>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={!dirty || !isValid}
                  sx={{ p: 1, mr: 2 }}
                >
                  <SearchIcon />
                </Button>
              </Grid>
              <Grid item xs={12}>
                {filter.name !== "" && (
                  <Button
                    startIcon={<CancelIcon />}
                    variant="text"
                    onClick={() => setFilter({ name: "" })}
                  >
                    Clean filters
                  </Button>
                )}
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Grid>
  );
};
