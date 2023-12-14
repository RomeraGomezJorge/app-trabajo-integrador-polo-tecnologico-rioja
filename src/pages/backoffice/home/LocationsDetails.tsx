import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography
} from "@mui/material";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { Layout as BackofficeLayout } from "../../../layouts/backoffice/Layout";
import { ApiResponse, apiGet } from "../../../services/apiService";
import { Spinner } from "../../../shared/components/Spinner";
import { Location } from "../location/locations.hooks";
import { LocationTabContext } from "./Tab/LocationTabContext";

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
        <Spinner/>
      ) : (
        <Card>
          <CardHeader title="Locations" />
          <CardContent>
            {locations.map((location:Location) => {
              return (
                <Box sx={{ mb: 5 }}>
                  <Divider
                    textAlign="center"
                    sx={{
                      mb: 3,
                      "&::before, &::after": {
                        borderColor: "rgb(4, 54, 176)",
                      },
                    }}
                  >
                    <Typography component="h2" fontSize={25} fontWeight="bold">
                      <span
                        style={{
                          fontSize: 30,
                          color: "rgb(4, 54, 176)",
                          fontWeight: "normal",
                          marginRight: 10,
                        }}
                      >
                        [
                      </span>
                      {location.name}
                      <span
                        style={{
                          fontSize: 30,
                          color: "rgb(4, 54, 176)",
                          fontWeight: "normal",
                          marginLeft: 10,
                        }}
                      >
                        ]
                      </span>
                    </Typography>
                  </Divider>
                  <LocationTabContext location={location} />
                </Box>
              );
            })}
          </CardContent>
        </Card>
      )}
    </BackofficeLayout>
  );
};
