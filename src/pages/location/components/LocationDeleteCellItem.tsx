import CancelIcon from "@mui/icons-material/Cancel";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
} from "@mui/material";
import { GridActionsCellItem } from "@mui/x-data-grid";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";
import {
  ApiResponse,
  apiDelete,
  fetchStatus,
} from "../../../services/apiService";
import { Spinner } from "../../../shared/components/Spinner";

interface Props {
  id: string;
  incrementChangeCounter(): void;
}

interface ComponenteProps extends Props {
  open: boolean;
  onClose(): void;
}

export const LocationDeleteCellItem = (props: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <GridActionsCellItem
        icon={
          <DeleteIcon
            sx={{
              borderRadius: 8,
              backgroundColor: "red",
              color: "white",
              fontSize: "1.5rem",
              p: 0.5,
            }}
          />
        }
        onClick={() => setOpen(true)}
        label="Delete"
      />
      {open && (
        <LocationDeleteDialog
          open={open}
          onClose={() => setOpen(false)}
          {...props}
        />
      )}
    </>
  );
};

const LocationDeleteDialog = ({
  open,
  onClose,
  incrementChangeCounter,
  id,
}: ComponenteProps) => {
  const [status, setStatus] = useState(fetchStatus.IDLE);

  const deleteLocation = async (id: string) => {
    setStatus(fetchStatus.LOADING);
    try {
      const response = await apiDelete<ApiResponse>(`/location/${id}`);

      if (response?.status === "error" && response?.message) {
        setStatus(fetchStatus.ERROR);
        enqueueSnackbar(response.message, { variant: "error" });
      } else {
        // Ejecuto incrementChangeCounter para indicar al componente LocationList que se han realizado cambios en las
        // y que debe volver a cargar los datos actualizados.
        incrementChangeCounter();
        setStatus(fetchStatus.SUCCESS);
        enqueueSnackbar("Location deleted", { variant: "success" });
        onClose();
      }
    } catch (error: any) {
      setStatus(fetchStatus.ERROR);
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };

  return (
    <Dialog open={open} maxWidth="sm" fullWidth onClose={onClose}>
      <DialogTitle variant="h5" fontWeight="bold" textAlign="center">
        <Divider textAlign="center">Confirm Location Deletion</Divider>
      </DialogTitle>

      <DialogContent sx={{ paddingTop: 2, textAlign: "center" }}>
        Are you sure you want to permanently delete this location? This action
        cannot be undone.
      </DialogContent>
      <DialogActions>
        <Button
          color="error"
          startIcon={<CancelIcon />}
          onClick={() => onClose()}
          variant="text"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          startIcon={
            status === fetchStatus.LOADING ? (
              <CircularProgress sx={{ color: "white" }} size={20} />
            ) : (
              <DeleteIcon />
            )
          }
          variant="contained"
          color="error"
          onClick={() => deleteLocation(id)}
        >
          Yes, delete it
        </Button>
      </DialogActions>
    </Dialog>
  );
};
