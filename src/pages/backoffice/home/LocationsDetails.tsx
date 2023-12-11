import {TabContext, TabList, TabPanel} from '@mui/lab';
import {Box, Card, CardContent, CardHeader, Tab} from '@mui/material';
import {useSnackbar} from 'notistack';
import {useState} from 'react';
import {Layout as BackofficeLayout} from '../../../layouts/backoffice/Layout';
import {useLocations} from '../location/locations.hooks';
import {ContactUsTab} from './Tab/ContactUsTab';
import {BasicInforamtionTab} from './Tab/BasicInforamtionTab';
import { AddressTab } from './Tab/AddressTab';

export const LocationsDetails = () => {
  const {enqueueSnackbar} = useSnackbar();
  const {data: locations, isLoading, error} = useLocations();

  if (error) {
    enqueueSnackbar(error.message, {variant: 'error'});
  }

  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <BackofficeLayout menuTitleSelected="Home">
      <Card>
        <CardHeader title="Locations"/>
        <CardContent>
          <TabContext value={value}>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Basic Information" value="1"/>
                <Tab label="Address" value="2"/>
                <Tab label="Contact Us" value="3"/>
              </TabList>
            </Box>
            <TabPanel value="1">
              <BasicInforamtionTab/>
            </TabPanel>
            <TabPanel value="2">
              <AddressTab/>
            </TabPanel>
            <TabPanel value="3" sx={{display: 'flex', gap: 5}}>
              <ContactUsTab/>
            </TabPanel>
          </TabContext>
        </CardContent>
      </Card>
    </BackofficeLayout>
  );
};
