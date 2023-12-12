import PlaceIcon from '@mui/icons-material/Place';
import { Grid, ListItem, ListItemText, Typography } from "@mui/material";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { ContactUsCard } from "../ContacUsCard";
import { Icon } from 'leaflet';

export const AddressTab = () => {

  const customIcon = new Icon({
    iconSize: [30,30],
    iconUrl: require("../../../../assets/img/marker-icon.png"),
  })

  return (
    <Grid container spacing={2} alignItems="center"    >
      <Grid item xs={2}>
        <ContactUsCard
          title="Local Office Address"
          icon={<PlaceIcon fontSize="small" />}
        >
          <Typography sx={{ color: "dark" }}>
            <ListItem>
              <ListItemText primary="Country" secondary="Argentina" />
            </ListItem>
            <ListItem>
              <ListItemText primary="State" secondary="La Rioja" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Street" secondary="Peron 1001" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Postal code" secondary="5300" />
            </ListItem>
          </Typography>
        </ContactUsCard>
      </Grid>
      <Grid item xs={10}>
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]} icon={customIcon}>
            <Popup>
              Location name
            </Popup>
          </Marker>
        </MapContainer>
      </Grid>
    </Grid>
  );
};
