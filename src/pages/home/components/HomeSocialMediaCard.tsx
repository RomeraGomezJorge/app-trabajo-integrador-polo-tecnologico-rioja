import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Button, List, ListItem, ListItemText } from "@mui/material";
import { HomeCard } from "./HomeCard";
interface Props {
  facebook?: string;
  twitter?: string;
  linkedin?: string;
} 

interface PropsComponent {
  url?: string;
  icon: React.ReactElement;
  label: string;
}

export const HomeSocialMediaCard = ({ facebook, twitter, linkedin }: Props) => {

  const show = Boolean(facebook || twitter || linkedin);

  return (
    <>
      {show && (
        <HomeCard title="Social media" icon={<QuestionAnswerIcon />}>
          <List>
            <SocialMediaButton
              url={facebook}
              icon={<FacebookIcon />}
              label="Facebook"
            />
            <SocialMediaButton
              url={twitter}
              icon={<TwitterIcon />}
              label="Twitter"
            />
            <SocialMediaButton
              url={linkedin}
              icon={<LinkedInIcon />}
              label="LinkedIn"
            />
          </List>
        </HomeCard>
      )}
    </>
  );
};

const SocialMediaButton = ({ url, icon, label }: PropsComponent) => {
  return (
    <>
      {!!url && (
        <ListItem>
          <ListItemText>
            <Button startIcon={icon}>{label}</Button>
          </ListItemText>
        </ListItem>
      )}
    </>
  );
};
