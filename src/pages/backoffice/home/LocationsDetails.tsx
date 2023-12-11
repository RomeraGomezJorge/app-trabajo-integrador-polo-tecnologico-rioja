import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemText,
  Tab,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { Layout as BackofficeLayout } from "../../../layouts/backoffice/Layout";
import { useLocations } from "../location/locations.hooks";
import { ContactUsCard } from "./ContacUsCard";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const LocationsDetails = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { data: locations, isLoading, error } = useLocations();

  if (error) {
    enqueueSnackbar(error.message, { variant: "error" });
  }

  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <BackofficeLayout menuTitleSelected="Home">
      <Card>
        <CardHeader title="Locations" />
        <CardContent>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Basic Information" value="1" />
                <Tab label="Address" value="2" />
                <Tab label="Contact Us" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Box sx={{ p: 3, display: "flex", alignItems: "center" }}>
                {/* Imagen a la izquierda */}
                <img
                  src="https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=yk01g3XLfTuRFa16fxJzsw&cb_client=search.gws-prod.gps&yaw=284.25308&pitch=0&thumbfov=100&w=185&h=160"
                  alt="Descripción de la imagen"
                  style={{ marginRight: "16px", maxWidth: "100px" }}
                />

                {/* Texto a la derecha */}
                <div>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold", fontSize: 22 }}
                  >
                    Tab 1 Content
                  </Typography>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum finibus odio eget orci bibendum, ac hendrerit mi
                    porta. Nullam volutpat libero tempus leo lacinia ornare. In
                    hac habitasse platea dictumst. Pellentesque facilisis ex
                    eget vulputate tincidunt. Curabitur fringilla ultrices
                    commodo.
                  </p>
                </div>
              </Box>
            </TabPanel>
            <TabPanel value="2">
              <List>
                <ListItem>
                  <ListItemText primary="Argentina" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="La rioja" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Capital" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Peron 100" />
                </ListItem>
              </List>
            </TabPanel>
            <TabPanel value="3" sx={{ display: "flex", gap: 5 }}>
              <ContactUsCard
                title="Contact Us by Phone"
                icon={<LocalPhoneRoundedIcon fontSize="small" />}
              >
                <Typography sx={{ lineHeight: 2 }}>
                  Feel free to reach out to us at any time by calling
                  <br />
                  <strong style={{ color: "#0543dc" }}>3804 1234564</strong>
                  <br />
                  Our team is here to assist you around the clock.
                </Typography>
              </ContactUsCard>
              <ContactUsCard
                title="Have a Question?"
                icon={<MailRoundedIcon />}
              >
                <Typography sx={{ lineHeight: 2 }}>
                  Drop us a message at 
                  <br />
                  <strong style={{ color: "#0543dc" }}>example@com</strong>
                  <br />
                  and let us know your thoughts or inquiries. We're here to listen and respond promptly to assist you.
                </Typography>
              </ContactUsCard>
              <ContactUsCard title="Opening Hours" icon={<AccessAlarmsIcon />}>
                <List>
                  {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map(
                    (day) => (
                      <ListItem key={day}  style={{ padding:1 }}>
                        <ListItemText 
                          primary={`${day} | 09:00 - 18:00`}
                          style={{ textAlign: "right" }}
                        />
                      </ListItem>
                    )
                  )}
                </List>
              </ContactUsCard>
              <ContactUsCard title="Social media" icon={<QuestionAnswerIcon />}>
                <List>
                  <ListItem>
                    <ListItemText>
                      <Button startIcon={<FacebookIcon />}>Facebook</Button>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>
                      <Button startIcon={<TwitterIcon />}>Twitter</Button>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>
                      <Button startIcon={<LinkedInIcon />}>LinkedIn</Button>
                    </ListItemText>
                  </ListItem>
                </List>
              </ContactUsCard>
            </TabPanel>
          </TabContext>
        </CardContent>
      </Card>
    </BackofficeLayout>
  );
};
