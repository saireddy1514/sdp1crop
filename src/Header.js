import React, { useState } from "react";
import Booking from "./Booking";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AgricultureSharpIcon from '@mui/icons-material/AgricultureSharp';
import { Card } from '@mui/material';
const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <AgricultureSharpIcon sx={{ transform: "scale(2)" }} />
          <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                Crop Storage System
              </Typography>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="primary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab  label="Home" href="/"/>
                <Tab label="Booking"  href="booking"/>
                <Tab label="Shopping" href="shopping"/>
                <Tab label="Contactus" href="feedback"/>
              </Tabs>
              {/* <Button sx={{ marginLeft: "auto"}} variant="contained" href="login">
                Login
              </Button>
              <Button sx={{ marginLeft: "10px" }} variant="contained" href="register">
                SignUp
              </Button> */}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;