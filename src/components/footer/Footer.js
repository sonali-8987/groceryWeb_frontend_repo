import { Box } from "@material-ui/core";
import { React, useEffect, useState } from "react";
import versionService from "./services/versionService";
import styles from "./styles/footerStyles";


const Footer = () => {

  const classes = styles();
  const [CurrentVersion, setCurrentVersion] = useState("");

  const fetchCurrentVersion = async () => {
    try {
      const response = await versionService.getCurrentVersion();
      setCurrentVersion(response.CurrentVersion);
    }
    catch (e) { }
  };

  useEffect(() => {
    fetchCurrentVersion();
  }, []);

  return (
    <Box className={classes.footer}>
      <div className={classes.footerText}><p>Application Version : {CurrentVersion}</p></div>
    </Box>

  );

};

export default Footer;