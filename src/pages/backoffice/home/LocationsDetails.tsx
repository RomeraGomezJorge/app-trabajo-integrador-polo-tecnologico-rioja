import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Divider,
  Typography,
} from "@mui/material";
import { useSnackbar } from "notistack";
import { Layout as BackofficeLayout } from "../../../layouts/backoffice/Layout";
import { useLocations } from "../location/locations.hooks";
import { LocationTabContext } from "./Tab/LocationTabContext";

export const LocationsDetails = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { data: locations, isLoading, error } = useLocations();

  if (error) {
    enqueueSnackbar(error.message, { variant: "error" });
  }

  return (
    <BackofficeLayout menuTitleSelected="Dashboard">
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress size={50} />
        </Box>
      ) : (
        <Card>
          <CardHeader title="Locations" />
          <CardContent>
            {locations.map((location) => {
              return (
                <Box sx={{ mb: 5 }}>
                  <Divider textAlign="center"
                           sx={{
                             mb:3,
                           "&::before, &::after": {
                               borderColor: "blue",
                             },
                           }}
                  >
                    <Typography component="h2" fontSize={25} fontWeight="bold">

                      <span style={{ fontSize: 30, color: "blue", fontWeight:"normal", marginRight:10 }}>[</span>
                      {location.name}
                      <span style={{ fontSize: 30, color: "blue",fontWeight:"normal",marginLeft:10 }}>]</span>
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
