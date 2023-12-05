import { Button, Card, CardContent, CardHeader, Grid } from "@mui/material";
import * as yup from "yup";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Form, Formik } from "formik";
import { Layout as BackofficeLayout } from "../../../layouts/backoffice/Layout";
import { useState } from "react";
import { FormikTextField } from "../../../shared/components/formikTextField";

const validationSchema = yup.object().shape({
  filter: yup.string().nullable(),
});

export const LocationList = () => {
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 15,
  });
  const [filterLocations, setFilterLocations] = useState({ filter: null });
  const columns: GridColDef<Location>[] = [
    { field: "name", headerName: "Name", flex: 4 },
  ];

  return (
    <BackofficeLayout menuTitleSelected="List location">
      <Card>
        <CardHeader title="Locations" />
        <CardContent sx={{ paddingTop: 0 }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12}>
              <Formik
                initialValues={{
                  filter: filterLocations.filter,
                }}
                validationSchema={validationSchema}
                enableReinitialize
                onSubmit={(values, formikHelpers) => {
                  setFilterLocations({
                    filter: values.filter,
                  });
                  formikHelpers.setSubmitting(false);
                }}
              >
                {({ dirty, isValid }) => (
                  <Form>
                    <Grid container spacing={1} alignItems="center">
                      <Grid item xs={12} sm={10}>
                        <FormikTextField label="Filter" field="filer" />
                      </Grid>
                      <Grid item xs={12} sm={2}>
                        <Button
                          fullWidth
                          type="submit"
                          variant="contained"
                          disabled={!dirty || !isValid}
                        >
                          Filter
                        </Button>
                      </Grid>
                    </Grid>
                  </Form>
                )}
              </Formik>
            </Grid>
            <Grid item xs={12}>
              <DataGrid
                autoHeight
                paginationModel={paginationModel}
                onPaginationModelChange={setPaginationModel}
                pageSizeOptions={[5, 15, 25, 50]}
                density="compact"
                rows={[]}
                columns={columns}
                loading={false}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </BackofficeLayout>
  );
};
