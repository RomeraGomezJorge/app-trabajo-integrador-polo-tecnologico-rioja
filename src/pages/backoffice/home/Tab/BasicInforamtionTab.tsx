import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

export const BasicInforamtionTab = () => {
  return (
    <Box sx={{ p: 3, display: "flex", alignItems: "center" }}>
      <img
        src="https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=yk01g3XLfTuRFa16fxJzsw&cb_client=search.gws-prod.gps&yaw=284.25308&pitch=0&thumbfov=100&w=185&h=160"
        alt="Descripción de la imagen"
        style={{ marginRight: "16px", maxWidth: "100px" }}
      />

      <div>
        <Typography variant="h5" sx={{ fontWeight: "bold", fontSize: 22 }}>
          Tab 1 Content
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          finibus odio eget orci bibendum, ac hendrerit mi porta. Nullam
          volutpat libero tempus leo lacinia ornare. In hac habitasse platea
          dictumst. Pellentesque facilisis ex eget vulputate tincidunt.
          Curabitur fringilla ultrices commodo.
          </Typography>
      </div>
    </Box>
  );
};
