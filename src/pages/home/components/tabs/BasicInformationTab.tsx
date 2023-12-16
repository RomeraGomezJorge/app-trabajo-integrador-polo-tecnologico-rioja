import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

interface Props {
  description?: string;
  image: string;
}

export const BasicInformationTab = ({ description, image }: Props) => {
  return (
    <Box sx={{ p: 3, display: "flex", alignItems: "center" }}>
      {!!image && (
        <img
          src={image}
          alt=""
          style={{ marginRight: "16px", maxWidth: "100px" }}
        />
      )}

      <div>
        <Typography>{description}</Typography>
      </div>
    </Box>
  );
};
