import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useSnackbar } from "notistack";
import { useMemo, useState } from "react";
import { Layout as BackofficeLayout } from "../../../layouts/backoffice/Layout";
import { LocationCreateButton } from "./LocationCreateButton";
import { LocationListFilter } from "./LocationListFilters";
import { Location, UseLocationsQuery, useLocations } from "./locations.hooks";


export const LocationList = () => {
  const { enqueueSnackbar } = useSnackbar()
  const [filter, setFilter] = useState<UseLocationsQuery>({ name: "" });
  const { data: locations, isLoading, error } = useLocations();
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 15,
  });
  const columns: GridColDef<Location>[] = [
    { field: "name", headerName: "Name", flex: 4 },
  ];


  if(error){
    enqueueSnackbar(error.message, { variant: 'error' })
  }

  const filteredLocations = useMemo(() => {
    return locations.filter((location) =>
      location.name.toLowerCase().includes(filter.name?.toLowerCase())
    );
  }, [locations, filter]);

  return (
    <BackofficeLayout menuTitleSelected="List location">
      <Card>
        <CardHeader title="Locations" action={<LocationCreateButton/>}
      />
        <CardContent sx={{ paddingTop: 0 }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12}>
              <LocationListFilter 
                filter={filter} 
                setFilter={(filter) => setFilter(filter)}
              />
            </Grid>
            <Grid item xs={12}>
              <DataGrid
                autoHeight
                paginationModel={paginationModel}
                onPaginationModelChange={setPaginationModel}
                pageSizeOptions={[5, 15, 25, 50]}
                density="compact"
                rows={filteredLocations as unknown as Location[]}
                getRowId={(row: Location) => row._id}
                columns={columns}
                loading={isLoading}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </BackofficeLayout>
  );
};
