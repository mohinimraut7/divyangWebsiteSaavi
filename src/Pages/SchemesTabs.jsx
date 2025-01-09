import React, { useState } from "react";
import { Tabs, Tab, Box, Typography,Grid} from "@mui/material";
import InfoCard from "../Components/InfoCard";
import schemesdata from "../data/dropdowndata/schemedata";
function TabPanel({ children, value, index }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function SchemesTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const cards = Array.from({ length: 15 });
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
        >
          <Tab label="Schemes Name" />
          {/* <Tab label="Tab 2" />
          <Tab label="Tab 3" /> */}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <Typography sx={{fontWeight:'bold',fontSize:'40px',lineHeight:'1.2'}}>Explore schemes of</Typography>
        <Typography sx={{fontWeight:'bold',fontSize:'40px',lineHeight:'1.2'}}>Central Schemes</Typography>   
      </Box>
    <Box>

    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", // Responsive grid layout
        gap: 3, // Gap between cards
        padding: 3,
      }}
    >
    {schemesdata.map((scheme, index) => (
                                   <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                   <InfoCard title={scheme.title} subtitle={scheme.subtitle} />
                                 </Grid>
))}
</Box>
    </Box>
     
    

      </TabPanel>
      
      <TabPanel value={value} index={1}>
        Content for Tab 2
      </TabPanel>
      <TabPanel value={value} index={2}>
        Content for Tab 3
      </TabPanel>
    </Box>
  );
}

export default SchemesTabs;
