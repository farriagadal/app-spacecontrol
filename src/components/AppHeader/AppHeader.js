import React from 'react';

import { Link } from 'react-router-dom';

import logo from '../../assets/icons/logo-white.svg';

import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import PersonIcon from '@material-ui/icons/Person';

import Dropdown from '../Dropdown/Dropdown'

import './AppHeader.scss';

import { Avatar, IconButton } from '@material-ui/core';

const AppHeader = props => {
  return (
    <header className="AppHeader flex">
      <div className="flex ml-auto">
        <IconButton className="icon" color="secondary" size="medium">
          <MenuIcon />
        </IconButton>
        <IconButton className="icon" color="secondary" size="medium">
          <NotificationsIcon />
        </IconButton>
        <Dropdown label={
          <IconButton color="secondary" size="medium">
            <PersonIcon />
          </IconButton>
        }>
          popop
        </Dropdown>
      </div>
    </header>
  );
};

export default AppHeader;
