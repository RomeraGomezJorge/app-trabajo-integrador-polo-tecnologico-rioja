import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

interface Props {
  description?: string;
  image: string;
}

export const BasicInforamtionTab = ({ description, image }: Props) => {
  return (
    <Box sx={{ p: 3, display: "flex", alignItems: "center" }}>
      <img
        src="https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=yk01g3XLfTuRFa16fxJzsw&cb_client=search.gws-prod.gps&yaw=284.25308&pitch=0&thumbfov=100&w=185&h=160"
        alt="Descripción de la imagen"
        style={{ marginRight: "16px", maxWidth: "100px" }}
      />

      <div>
        <Typography>{description}</Typography>
      </div>
    </Box>
  );
};
