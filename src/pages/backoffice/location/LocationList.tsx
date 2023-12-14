import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridRowParams
} from "@mui/x-data-grid";
import { useSnackbar } from "notistack";
import { useEffect, useMemo, useState } from "react";

import { Layout as BackofficeLayout } from "../../../layouts/backoffice/Layout";
import { ApiResponse, apiGet } from "../../../services/apiService";
import { LocationCreateButton } from "./LocationCreateButton";
import { LocationEditCellItem } from "./LocationEditButton";
import { LocationListFilter } from "./LocationListFilters";
import { Location, UseLocationsQuery } from "./locations.hooks";
import { LocationDeleteCellItem } from "./LocationDeleteButton";

export const LocationList = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [filter, setFilter] = useState<UseLocationsQuery>({ name: "" });
  const [locations, setLocations] = useState<Location[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [changeCounter,setChangeCounter] = useState(0);
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 15,
  });
  const columns: GridColDef<Location>[] = [
    { field: "name", headerName: "Name", flex: 4 },
    {
      field: "actions",
      type: "actions",
      getActions: ({row}: GridRowParams) => [
        <LocationEditCellItem incrementChangeCounter={incrementChangeCounter} location={row} />,
        <LocationDeleteCellItem incrementChangeCounter={incrementChangeCounter} id={row._id} />,
      ],
    },
  ];

  const incrementChangeCounter = () =>{
    setChangeCounter(changeCounter +1)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiGet<ApiResponse>('/location');
        
        if(response?.status === 'fail' && response?.message){
          enqueueSnackbar(response.message, { variant: "error" });
        }else if(response?.data){
          setLocations(response.data)
        }
        
      } catch (error: any) {
        enqueueSnackbar(error.message, { variant: "error" });
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [changeCounter]);


  const filteredLocations = useMemo(() => {
    return locations.filter((location) =>
      location.name.toLowerCase().includes(filter.name?.toLowerCase())
    );
  }, [locations, filter]);

  return (
    <BackofficeLayout menuTitleSelected="List location">
      <Card>
        <CardHeader title="Locations" action={<LocationCreateButton incrementChangeCounter={incrementChangeCounter} />} />
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
