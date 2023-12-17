  import {
    Avatar,
    Card,
    CardActionArea,
    CardContent,
    Typography,
  } from "@mui/material";
  import { ReactNode } from "react";

  interface Props {
    title: string;
    icon: React.ReactElement;
    children?: ReactNode;
  }

  export const HomeCard = ({ title, icon, children }: Props) => {
    return (
      <Card
        sx={{
          maxWidth: 295,
          backgroundColor: "#f2f2f2",
          p: 2,
          position: "relative",
          mt: 5,
          overflow: "visible",
          textAlign: "center",
        }}
      >
        <Avatar
          sx={{
            backgroundColor: "#0543dc",
            width: 45,
            height: 42,
            position: "absolute",
            top: "-21px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {icon}
        </Avatar>

        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: "bold", fontSize: 20 }}
          >
            {title}
          </Typography>
          <Typography>{children}</Typography>
        </CardContent>
      </Card>
    );
  };
