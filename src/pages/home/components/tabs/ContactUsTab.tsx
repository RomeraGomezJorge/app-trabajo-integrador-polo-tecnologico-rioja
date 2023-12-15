import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import {
  List,
  ListItem,
  ListItemText,
  Typography
} from "@mui/material";

import { HomeCard } from "../HomeCard";
import { AdditionalInfo, Contact } from "../../../location/locations.interface";
import { HomeSocialMediaCard } from "../HomeSocialMediaCard";

interface Props {
  contact: Contact;
  additional_info: AdditionalInfo;
}

export const ContactUsTab = ({ contact, additional_info }: Props) => {

  return (
    <>
      {!!contact.phone && (
        <HomeCard
          title="Contact Us by Phone"
          icon={<LocalPhoneRoundedIcon fontSize="small" />}
        >
          <Typography sx={{ lineHeight: 2 }}>
            Feel free to reach out to us at any time by calling
            <br />
            <strong style={{ color: "#0543dc" }}>{contact.phone}</strong>
            <br />
            Our team is here to assist you around the clock.
          </Typography>
        </HomeCard>
      )}
      {!!contact.email && (
        <HomeCard title="Have a Question?" icon={<MailRoundedIcon />}>
          <Typography sx={{ lineHeight: 2 }}>
            Drop us a message at
            <br />
            <strong style={{ color: "#0543dc" }}>{contact.email}</strong>
            <br />
            and let us know your thoughts or inquiries. We're here to listen and
            respond promptly to assist you.
          </Typography>
        </HomeCard>
      )}
      <HomeCard title="Opening Hours" icon={<AccessAlarmsIcon />}>
        <List>
          {additional_info.days_of_operation.map((day) => (
            <ListItem key={day} style={{ padding: 1 }}>
              <ListItemText
                primary={`${day} | ${additional_info.business_hours.opening} - ${additional_info.business_hours.closing}`}
                style={{ textAlign: "right" }}
              />
            </ListItem>
          ))}º
        </List>
      </HomeCard>
      <HomeSocialMediaCard
        facebook={additional_info.social_media?.facebook}
        twitter={additional_info.social_media?.twitter}
        linkedin={additional_info.social_media?.linkedin}
      />
    </>
  );
};
