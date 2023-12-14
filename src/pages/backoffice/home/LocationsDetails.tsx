import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { Layout as BackofficeLayout } from "../../../layouts/backoffice/Layout";
import { ApiResponse, apiGet } from "../../../services/apiService";
import { Spinner } from "../../../shared/components/Spinner";
import { Location } from "../location/locations.hooks";
import { LocationDetailTitle } from "./components/LocationDetailTitle";
import { LocationTabContext } from "./components/LocationTabContext";

export const LocationsDetails = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [locations, setLocations] = useState<Location[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiGet<ApiResponse>("/location");

        if (response?.status === "fail" && response?.message) {
          enqueueSnackbar(response.message, { variant: "error" });
        } else if (response?.data) {
          setLocations(response.data);
        }
      } catch (error: any) {
        enqueueSnackbar(error.message, { variant: "error" });
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <BackofficeLayout menuTitleSelected="Dashboard">
      {isLoading ? (
        <Spinner />
      ) : (
        <Card>
          <CardHeader title="Locations" />
          <CardContent>
            {locations.map((location: Location, index) => {
              return (
                <Box key={`box-${index}`} sx={{ mb: 5 }}>
                  <LocationDetailTitle
                    key={`title-${index}`}
                    title={location.name}
                  />
                  <LocationTabContext key={`tab-${index}`} location={location} />
                </Box>
              );
            })}
          </CardContent>
        </Card>
      )}
    </BackofficeLayout>
  );
};
