import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";

import DoneAllIcon from "@material-ui/icons/DoneAll";
import InfoIcon from "@material-ui/icons/Info";
import SettingsIcon from "@material-ui/icons/Settings";

import * as settings from "../../config/settings";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    settings: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    actyionButton: {
      marginLeft: theme.spacing(10)
    },
    container: {
      display: "flex",
      justifyContent: "center"
    },
    sourceURI: {
      width: "60%",
      marginTop: theme.spacing(20)
    }
  }),
);

const Settings = (props: any) => {
  const [sourceURI, setSourceURI] = React.useState(settings.sourceURI() || "");
  const [errors, setErrors] = React.useState({sourceURI: ""});

  const classes = useStyles();
  const redirectToTv = () => props.history.push("/");
  const save = () => {
    if(settings.validSourceURI(sourceURI)) {
      settings.setSourceURI(sourceURI);
    } else {
      return setErrors({sourceURI: "is invalid"});
    }

    props.history.push("/");
  };

  return(
    <div className={classes.settings}>
      <AppBar position="static" title="Settings">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <IconButton color="inherit">
              <SettingsIcon fontSize="large" />
            </IconButton>
            Settings
          </Typography>

          <IconButton onClick={() => props.history.push("/about")} color="default" aria-label="about">
            <InfoIcon />
            About
          </IconButton>

          <IconButton
            onClick={save}
            className={classes.actyionButton}
            color="secondary"
            aria-label="delete"
            >
            <DoneAllIcon />
            Save
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box className={classes.container}>
        <TextField
          className={classes.sourceURI}
          defaultValue={sourceURI}
          onChange={(e) => setSourceURI(e.target.value)}
          placeholder="https://source.com/plist.m3u"
          label="Source URI"
          variant="outlined"
          error={!!errors.sourceURI}
          helperText={errors.sourceURI || ""}
          required
          />
      </Box>
    </div>
  );
};

export default Settings;
