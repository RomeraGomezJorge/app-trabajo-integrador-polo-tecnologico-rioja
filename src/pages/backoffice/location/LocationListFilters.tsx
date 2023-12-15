import CancelIcon from "@mui/icons-material/Cancel";
import SearchIcon from "@mui/icons-material/Search";
import { Button, Grid } from "@mui/material";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { FormikTextField } from "../../../shared/components/formikTextField";
import { UseLocationsQuery } from "./locations.hooks";
import { useDispatch } from "react-redux";
import { cleanSearch, setSearch } from "../../../app/features/locations/locationSlice";

const validationSchema = yup.object().shape({
  filter: yup.string().nullable(),
});

export interface Props {
  filter: UseLocationsQuery;
  setFilter(values: UseLocationsQuery): void;
}

export const LocationListFilter = ({ filter, setFilter }: Props) => {
  const dispatch = useDispatch()

  const cleanFilter = () =>{
    setFilter({ name: "" })

    // Envio la accion para limpiar los filtros en el estado global de redux
    dispatch(cleanSearch())
  }

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

          // Cuando se envia el formulario, envio la accion que actualiza los filtros 
          // al estado global de redux con los valores del formulario.
          dispatch(setSearch(values))
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
                    onClick={cleanFilter}
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
