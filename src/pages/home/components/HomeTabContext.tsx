import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import { useState } from "react";
import { BasicInformationTab } from "./tabs/BasicInformationTab";
import { AddressTab } from "./tabs/AddressTab";
import { ContactUsTab } from "./tabs/ContactUsTab";
import { ILocation } from "../../location/locations.interface";

interface Props {
  location: ILocation;
}

export const HomeTabContext = ({ location }: Props) => {
  const [value, setValue] = useState(`${location._id}-basic-information`);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value} >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <TabList onChange={handleChange} centered >
          <Tab label="Basic Information" value={`${location._id}-basic-information`} />
          <Tab label="Address" value={`${location._id}-address`} />
          <Tab label="Contact Us" value={`${location._id}-contact-us`} />
        </TabList>
      </Box>
      <TabPanel value={`${location._id}-basic-information`}>
        <BasicInformationTab
            description={location.description}
            image={location.image}
        />
      </TabPanel>
      <TabPanel value={`${location._id}-address`}>
        <AddressTab
          name={location.name} 
          address={location.address}
          coordinates={location.additional_info.coordinates}
        />
      </TabPanel>
      <TabPanel value={`${location._id}-contact-us`} sx={{ display: "flex", gap: 5 }}>
        <ContactUsTab
            contact={location.contact}            
            additional_info={location.additional_info}
        />
      </TabPanel>
    </TabContext>
  );
};
