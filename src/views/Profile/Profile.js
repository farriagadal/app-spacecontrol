import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import ProfileUserForm from '../../components/ProfileUserForm/ProfileUserForm';
import ProfileSegurity from '../../components/ProfileSegurity/ProfileSegurity';

import './Profile.scss'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const ScrollableTabsButtonAuto = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Editar Perfil" {...a11yProps(0)} />
          <Tab label="Contraseña" {...a11yProps(1)} />
          <Tab label="Premium" disabled {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
       <ProfileUserForm />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProfileSegurity />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
}

const Profile = props => {
  const urlImage = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.overstockart.com%2Foptimized%2Fcache%2Fdata%2Fproduct_images%2FLDV1497-1000x1000.jpg&f=1&nofb=1" 
  return (
    <div className="Profile container">
      <h2 className="Profile__title">Account</h2>
      <div className="Profile__card">
        <div className="Profile__card__avatar">
          <span style={{
              backgroundImage: `url(${urlImage})` 
            }}
          ></span>
        </div>
        <div className="Profile__card__tabs">
          <ScrollableTabsButtonAuto />
        </div>
      </div>
    </div>
  )
}

export default Profile;