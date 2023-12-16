import PlaceIcon from '@mui/icons-material/Place';
import {Grid, ListItem, ListItemText, Typography} from '@mui/material';
import {Icon} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import {IAddress, ICoordinates} from '../../../location/locations.interface';
import {HomeCard} from '../HomeCard';

interface Props {
  name: string;
  address: IAddress;
  coordinates: ICoordinates;
}

export const AddressTab = ({ address, coordinates, name }: Props) => {
  const customIcon = new Icon({
    iconSize: [30, 30],
    iconUrl: require("../../../../assets/img/marker-icon.png"),
  });

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={3}>
        <HomeCard
          title="Local Office Address"
          icon={<PlaceIcon fontSize="small" />}
        >
          <Typography sx={{ color: "dark" }}>
            <ListItem>
              <ListItemText primary="Country" secondary={address.country} />
            </ListItem>
            <ListItem>
              <ListItemText primary="City" secondary={address.city} />
            </ListItem>
            <ListItem>
              <ListItemText primary="State" secondary={address.state} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Street" secondary={address.street} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Postal code" secondary={address.postal_code} />
            </ListItem>
          </Typography>
        </HomeCard>
      </Grid>
      <Grid item xs={9}>
        <MapContainer
          center={[coordinates.latitude, coordinates.longitude]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[coordinates.latitude, coordinates.longitude]}
            icon={customIcon}
          >
            <Popup>{name}</Popup>
          </Marker>
        </MapContainer>
      </Grid>
    </Grid>
  );
};
