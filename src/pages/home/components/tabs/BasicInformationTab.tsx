import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

interface Props {
  description?: string;
  image: string;
}

export const BasicInformationTab = ({ description, image }: Props) => {
  return (
    <Box sx={{ p: 3, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
      <div style={{ marginBottom: "16px" }}>
        {!!image && (
          <img
            src={image}
            alt=""
            style={{ maxWidth: "300px" }}
          />
        )}
      </div>

      <div>
        <Typography>{description}</Typography>
      </div>
    </Box>
  );
};