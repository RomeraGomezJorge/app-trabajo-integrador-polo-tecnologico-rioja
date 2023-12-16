import { Divider, Typography } from "@mui/material";

interface Props {
  title: string;
}

export const HomeLocationNameDivider = ({ title }: Props) => {
  return (
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
        {title}
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
  );
};
