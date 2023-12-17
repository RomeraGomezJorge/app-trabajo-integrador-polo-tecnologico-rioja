import { Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import {theme} from '../../theme'

export interface Props {
  primary: string;
  secondary?: string;
}

export const TitleGroupFieldDivider = ({ primary, secondary }: Props) => {
  return (
    <>
      <Divider
        textAlign="left"
        sx={{
          "& .MuiDivider-wrapper":{
            pl:0
          } ,
          "&::before":{
            width:0
          },
          "&::after": {
            borderColor: theme.palette.primary.main,
            pl:0
          },
        }}
      >
        <Typography fontWeight="bold" variant="h6">
          {primary}
        </Typography>
      </Divider>
      {!!secondary && (
        <Typography sx={{ pt: 0, pb: 2, color: "grey" }}>
          {secondary}
        </Typography>
      )}
    </>
  );
};
