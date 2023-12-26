import { Box, Card, CardContent, CardHeader } from "@mui/material";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { Layout as BackofficeLayout } from "../../layouts/Layout";
import { ApiResponse, apiGet, fetchStatus } from "../../services/apiService";
import { Spinner } from "../../shared/components/Spinner";
import { ILocation } from "../location/locations.interface";
import { HomeLocationNameDivider } from "./components/HomeLocationNameDivider";
import { HomeTabContext } from "./components/HomeTabContext";

export const LocationsDetails = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [locations, setLocations] = useState<ILocation[]>([]);
  const [status, setStatus] = useState(fetchStatus.IDLE);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setStatus(fetchStatus.LOADING);
        const response = await apiGet<ApiResponse>("/location");

        if (response?.status === "error" && response?.message) {
          setStatus(fetchStatus.ERROR);
          enqueueSnackbar(response.message, { variant: "error" });
        } else if (response?.data) {
          setStatus(fetchStatus.SUCCESS);
          setLocations(response.data);
        }
      } catch (error: any) {
        setStatus(fetchStatus.ERROR);
        enqueueSnackbar(error.message, { variant: "error" });
      }
    };

    fetchData();
  }, []);

  return (
    <BackofficeLayout menuTitleSelected="Dashboard">
      {status === fetchStatus.LOADING ? (
        <Spinner />
      ) : (
        <Card>
          <CardHeader title="Locations" />
          <CardContent>
            {locations.map((location: ILocation, index) => {
              return (
                <Box key={`box-${index}`} sx={{ mb: 5 }}>
                  <HomeLocationNameDivider
                    key={`title-${index}`}
                    title={location.name}
                  />
                  <HomeTabContext key={`tab-${index}`} location={location} />
                </Box>
              );
            })}
          </CardContent>
        </Card>
      )}
    </BackofficeLayout>
  );
};
