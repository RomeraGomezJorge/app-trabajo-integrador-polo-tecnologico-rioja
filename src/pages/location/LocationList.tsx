import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import { DataGrid, GridColDef, GridRowParams } from "@mui/x-data-grid";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Layout as BackofficeLayout } from "../../layouts/Layout";
import { ApiResponse, apiGet, fetchStatus } from "../../services/apiService";
import { LocationCreateButton } from "./components/LocationCreateButton";
import { LocationDeleteCellItem } from "./components/LocationDeleteCellItem";
import { LocationEditCellItem } from "./components/LocationEditCellItem";
import { LocationListFilter } from "./components/LocationListFilters";
import { ILocation, ILocationsFilters } from "./locations.interface";

export const LocationList = () => {
  // Obtengo del estado global de redux los valores correspondientes a los filtros de busqueda para las ubicaciones.
  // por defecto seria {name:""}
  const search = useSelector((state: any) => state.locationSearch);

  const { enqueueSnackbar } = useSnackbar();
  const [filter, setFilter] = useState<ILocationsFilters>(search);
  const [locations, setLocations] = useState<ILocation[]>([]);
  const [status, setStatus] = useState(fetchStatus.IDLE);
  const [changeCounter, setChangeCounter] = useState(0);
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 15,
  });
  const columns: GridColDef<ILocation>[] = [
    { field: "name", headerName: "Name", flex: 4 },
    {
      field: "actions",
      type: "actions",
      getActions: ({ row }: GridRowParams) => [
        <LocationEditCellItem
          incrementChangeCounter={incrementChangeCounter}
          location={row}
        />,
        <LocationDeleteCellItem
          incrementChangeCounter={incrementChangeCounter}
          id={row._id}
        />,
      ],
    },
  ];

  // incrementChangeCounter se utiliza para comunicar al componente LocationList
  // que se han realizado cambios en las locations (ya sea creacion, edicion o eliminacion) y que debe volver
  // a cargar los datos actualizados.
  const incrementChangeCounter = () => {
    setChangeCounter(changeCounter + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setStatus(fetchStatus.LOADING);
        const response = await apiGet<ApiResponse>("/location", {
          params: filter,
        });

        if (response?.status === "error" && response?.message) {
          setStatus(fetchStatus.ERROR);
          enqueueSnackbar(response.message, { variant: "error" });
        } else if (response?.data) {
          setLocations(response.data);
          setStatus(fetchStatus.SUCCESS);
        }
      } catch (error: any) {
        enqueueSnackbar(error.message, { variant: "error" });
        setStatus(fetchStatus.ERROR);
      }
    };

    fetchData();
  }, [changeCounter, filter]);

  const isLoading = status === fetchStatus.LOADING;

  return (
    <BackofficeLayout menuTitleSelected="List location">
      <Card>
        <CardHeader
          title="Locations"
          action={
            <LocationCreateButton
              incrementChangeCounter={incrementChangeCounter}
            />
          }
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
                rows={locations as unknown as ILocation[]}
                getRowId={(row: ILocation) => row._id}
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
