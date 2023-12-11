import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Button, List, ListItem, ListItemText, Typography } from '@mui/material';
import { ContactUsCard } from "../ContacUsCard";


export const ContactUsTab = () => {

  return (
    <>
      <ContactUsCard
        title="Contact Us by Phone"
        icon={<LocalPhoneRoundedIcon fontSize="small"/>}
      >
        <Typography sx={{lineHeight: 2}}>
          Feel free to reach out to us at any time by calling
          <br/>
          <strong style={{color: '#0543dc'}}>3804 1234564</strong>
          <br/>
          Our team is here to assist you around the clock.
        </Typography>
      </ContactUsCard>
      <ContactUsCard
        title="Have a Question?"
        icon={<MailRoundedIcon/>}
      >
        <Typography sx={{lineHeight: 2}}>
          Drop us a message at
          <br/>
          <strong style={{color: '#0543dc'}}>example@com</strong>
          <br/>
          and let us know your thoughts or inquiries. We're here to
          listen and respond promptly to assist you.
        </Typography>
      </ContactUsCard>
      <ContactUsCard title="Opening Hours" icon={<AccessAlarmsIcon/>}>
        <List>
          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map(
            (day) => (
              <ListItem key={day} style={{padding: 1}}>
                <ListItemText
                  primary={`${day} | 09:00 - 18:00`}
                  style={{textAlign: 'right'}}
                />
              </ListItem>
            )
          )}
        </List>
      </ContactUsCard>
      <ContactUsCard title="Social media" icon={<QuestionAnswerIcon/>}>
        <List>
          <ListItem>
            <ListItemText>
              <Button startIcon={<FacebookIcon/>}>Facebook</Button>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Button startIcon={<TwitterIcon/>}>Twitter</Button>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Button startIcon={<LinkedInIcon/>}>LinkedIn</Button>
            </ListItemText>
          </ListItem>
        </List>
      </ContactUsCard>
    </>
  )
}