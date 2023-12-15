import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HomeIcon from "@mui/icons-material/Home";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { styled, useTheme } from "@mui/material/styles";
import { drawerWidth } from "./Layout";
import MapIcon from "@mui/icons-material/Map";
import { Link } from "react-router-dom";

interface Props {
  handleDrawerClose(): void;
  open: boolean;
}

interface MenuItems {
  title: string;
  icon: EmotionJSX.Element;
  url: string;
}

const menuItems: MenuItems[] = [
  {
    title: "Home",
    icon: <HomeIcon />,
    url: "/",
  },
  {
    title: "Location",
    icon: <MapIcon />,
    url: "/location",
  },
];

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export const SideBar = ({ handleDrawerClose, open }: Props) => {
  const theme = useTheme();

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#2e3b4e",
          color: "rgb(208, 211, 217)",
        },
        "& .MuiSvgIcon-root": {
          color: "rgb(208, 211, 217)",
          fontSize: "19px",
        },
        "& .MuiListItemIcon-root": {
          minWidth: "30px",
        },
        "& .MuiListItem-root": {
          padding: "0 16px",
        },
        "& .MuiDivider-root": {
          backgroundColor: "rgb(108, 119, 139)",
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "18px",
            flexGrow: 1,
            textAlign: "center",
          }}
        >
          Locations
        </Typography>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List sx={{ pt: 0 }}>
        {menuItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <Link
              to={item.url}
              style={{ textDecoration: "none", color: "white" }}
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
