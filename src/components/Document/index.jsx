import React, { useState } from "react";
import { Box } from "@mui/material";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Deal from "./Deal";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography variant="span">{children}</Typography>
        </Box>
      )}
    </Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const Document = () => {
  const [value, setValue] = useState(0);

  const handleChange = (value, newValue) => {
    setValue(newValue);
  };
  return (
    <Box padding="32px">
      <h1>Документы</h1>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            width: "586px",
            borderColor: "divider",
            marginTop: "32px",
            marginBottom: "16px",
            background: "#fff",
            border: "1px solid rgba(0, 0, 0, 0.04)",
            borderRadius: "8px",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab sx={{ fontSize: "14px" }} label="Договора" {...a11yProps(0)} />
            <Tab
              sx={{ fontSize: "14px" }}
              label="Счет фактуры"
              {...a11yProps(1)}
            />
            <Tab sx={{ fontSize: "14px" }} label="Акт" {...a11yProps(2)} />
            <Tab
              sx={{ fontSize: "14px" }}
              label="Доверенность"
              {...a11yProps(3)}
            />
            <Tab sx={{ fontSize: "14px" }} label="ТТН" {...a11yProps(4)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Deal />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
      </Box>
    </Box>
  );
};

export default Document;
