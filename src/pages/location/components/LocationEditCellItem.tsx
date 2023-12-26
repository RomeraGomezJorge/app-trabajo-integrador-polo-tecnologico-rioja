import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Dialog, DialogTitle, Divider } from "@mui/material";
import { GridActionsCellItem } from "@mui/x-data-grid";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";
import {
  ApiResponse,
  apiPatch,
  fetchStatus,
} from "../../../services/apiService";
import { ILocation } from "../locations.interface";
import { LocationForm } from "./LocationForm";

interface Props {
  incrementChangeCounter(): void;
  location: ILocation;
}

interface ComponenteProps extends Props {
  open: boolean;
  onClose(): void;
}

export const LocationEditCellItem = (props: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <GridActionsCellItem
        icon={
          <ModeEditIcon
            sx={{
              borderRadius: 8,
              backgroundColor: "blue",
              color: "white",
              fontSize: "1.5rem",
              p: 0.5,
            }}
          />
        }
        onClick={() => setOpen(true)}
        label="Edit"
      />
      {open && (
        <LocationEditDialog
          open={open}
          onClose={() => setOpen(false)}
          {...props}
        />
      )}
    </>
  );
};

const LocationEditDialog = ({
  open,
  onClose,
  incrementChangeCounter,
  location,
}: ComponenteProps) => {
  const [status, setStatus] = useState(fetchStatus.IDLE);

  const updateLocation = async (data: ILocation, id: string) => {
    setStatus(fetchStatus.LOADING);

    try {
      const response = await apiPatch<ApiResponse, ILocation>(
        `/location/${id}`,
        data
      );

      if (response?.status === "error" && response?.message) {
        setStatus(fetchStatus.ERROR);
        enqueueSnackbar(response.message, { variant: "error" });
      } else {
        // Ejecuto incrementChangeCounter para indicar al componente LocationList que se han realizado cambios en las
        // y que debe volver a cargar los datos actualizados.
        incrementChangeCounter();
        setStatus(fetchStatus.SUCCESS);
        enqueueSnackbar("Location updated", { variant: "success" });
        onClose();
      }
    } catch (error: any) {
      setStatus(fetchStatus.ERROR);
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };

  const isLoading = status === fetchStatus.LOADING;
  return (
    <Dialog open={open} maxWidth="lg" fullWidth onClose={onClose}>
      <DialogTitle variant="h5" fontWeight="bold" textAlign="center">
        <Divider textAlign="center">Edit Location</Divider>
      </DialogTitle>
      <LocationForm
        location={location}
        update={updateLocation}
        onClose={onClose}
        loading={isLoading} 
      />
    </Dialog>
  );
};
