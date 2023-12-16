import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  Button,
  Dialog,
  DialogTitle,
  Divider
} from "@mui/material";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";
import { ApiResponse, apiPost } from "../../../services/apiService";
import { Spinner } from "../../../shared/components/Spinner";
import { ILocation } from "../locations.interface";
import { LocationForm } from "./LocationForm";

interface Props {
  incrementChangeCounter(): void;
}

interface ComponentProps extends Props {
  open: boolean;
  onClose(): void;
}

export const LocationCreateButton = ({ incrementChangeCounter }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="contained"
        startIcon={<AddCircleIcon />}
        onClick={() => setOpen(true)}
      >
        Create
      </Button>
      {open && (
        <LocationCreateDialog
          open={open}
          onClose={() => setOpen(false)}
          incrementChangeCounter={incrementChangeCounter}
        />
      )}
    </>
  );
};

const LocationCreateDialog = ({
  open,
  onClose,
  incrementChangeCounter,
}: ComponentProps) => {
  const [isLoading, setIsLoading] = useState(false);
    const createLocation = async (data: ILocation) => {
    setIsLoading(true);

    try {
      const response = await apiPost<ApiResponse>("/location", data);

      if (response?.status === "fail" && response?.message) {
        enqueueSnackbar(response.message, { variant: "error" });
      } else {
        // Ejecuto incrementChangeCounter para indicar al componente LocationList que se han realizado cambios en las
        // y que debe volver a cargar los datos actualizados.
        incrementChangeCounter();
        enqueueSnackbar("Location created", { variant: "success" });
        onClose();
      }
    } catch (error: any) {
      enqueueSnackbar(error.message, { variant: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  return isLoading ? (
    <Spinner />
  ) : (
    <Dialog open={open} maxWidth="lg" fullWidth onClose={onClose}>
      <DialogTitle variant="h5" fontWeight="bold" textAlign="center">
        <Divider textAlign="center">Create Location</Divider>
      </DialogTitle>
      <LocationForm 
        create={createLocation}
        onClose={onClose}
      />
    </Dialog>
  );
};
