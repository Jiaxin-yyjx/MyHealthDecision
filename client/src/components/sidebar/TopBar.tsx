import React from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CustomTabPanel from "../cost/Cost.tsx";
import CostsOfCare from "../cost/CostsOfCare.tsx";
import { Grid } from "@mui/material";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display:'flex', flexDirection:'row', alignItems:'center'}}>
      <Grid container>
        <Grid item xs={2} >
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} indicatorColor="secondary" textColor="primary" onChange={handleChange} aria-label="basic tabs example" 
            TabIndicatorProps={{style: {backgroundColor: '#0ceb7f'}}} orientation='vertical'
            sx={{
              "& button.Mui-selected": {backgroundColor:'lightGreen'}
            }}>
              <Tab label="Cost" {...a11yProps(0)} />
              <Tab label="Local Price Comparsion" {...a11yProps(1)} />
              <Tab label="Find a Provider" {...a11yProps(2)} />
              <Tab label="Learn" {...a11yProps(3)} />
              <Tab label="Questions to Ask" {...a11yProps(4)} />
            </Tabs>
          </Box>
        </Grid>
      <Grid item xs={10}>
        <CustomTabPanel value={value} index={0}>
          <CostsOfCare OONP={8000} INP={3166} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Local Price Comparison
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Find a Provider
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          Learn
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          Questions to Ask
        </CustomTabPanel>
      </Grid>
    </Grid>
  </Box>
);
}