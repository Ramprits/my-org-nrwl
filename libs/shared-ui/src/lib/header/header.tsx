/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import MenuIcon from '@material-ui/icons/Menu';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppsIcon from '@material-ui/icons/Apps';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

import './header.module.scss';

export interface HeaderProps {
  bucketMain: any[];
  content: any;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    display: 'none',
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      display: 'inline-flex',
    },
  },
  linkBrand: {
    flexGrow: 1,
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  linkBrandSmall: {
    display: 'none',
    flexGrow: 1,
    [theme.breakpoints.down('xs')]: {
      display: 'inline-block',
    },
  },
  drawer: {
    width: 256,
    flexShrink: 0,
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  drawerContainer: {
    width: 256,
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export function Header(props: HeaderProps) {
  console.log(`props`, props);
  const classes = useStyles();
  const content = {
    brand: {
      image:
        'https://firebasestorage.googleapis.com/v0/b/oclm-app.appspot.com/o/logo%2Flogo-pied-piper-white.png?alt=media&token=e1592d62-061a-4cc8-9e3a-7f6cfb412350',
      width: 120,
    },
    small: {
      image:
        'https://firebasestorage.googleapis.com/v0/b/oclm-app.appspot.com/o/logo%2Flogo-pied-piper-white-icon.png?alt=media&token=918c4189-d3d3-40ec-8e0b-868af49c56b3',
      width: 32,
    },
    home: 'Home',
    fieldAgent: 'Field Agent',
    support: 'Support',
    contact: 'Contact',
    avatar:
      'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    ...props.content,
  };
  let brand;
  let brandSmall;
  if (content['brand'].image) {
    brand = (
      <img src={content['brand'].image} alt="" width={content['brand'].width} />
    );
  }

  if (content['small'].image) {
    brandSmall = (
      <img src={content['small'].image} alt="" width={content['small'].width} />
    );
  }

  const buckets = {
    main: Array.isArray(props.bucketMain) ? props.bucketMain : [],
  };

  const [state, setState] = React.useState({ open: false });

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Link
            href="#"
            variant="h5"
            color="inherit"
            underline="none"
            className={classes.linkBrand}
          >
            {brand}
          </Link>
          <Link
            href="#"
            variant="h5"
            color="inherit"
            underline="none"
            className={classes.linkBrandSmall}
          >
            {brandSmall}
          </Link>
          <IconButton color="inherit">
            <MailIcon />
          </IconButton>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton color="inherit">
            <Avatar alt="" src={content['avatar']} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer className={classes.drawer} variant="permanent">
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button key={content['home']}>
              <ListItemIcon>
                <AppsIcon />
              </ListItemIcon>
              <ListItemText primary={content['home']} />
            </ListItem>
            <ListItem button key={content['fieldAgent']}>
              <ListItemIcon>
                <BusinessCenterIcon />
              </ListItemIcon>
              <ListItemText primary={content['fieldAgent']} />
            </ListItem>
            <ListItem button key={content['support']}>
              <ListItemIcon>
                <LiveHelpIcon />
              </ListItemIcon>
              <ListItemText primary={content['support']} />
            </ListItem>
            <ListItem button key={content['contact']}>
              <ListItemIcon>
                <AttachMoneyIcon />
              </ListItemIcon>
              <ListItemText primary={content['contact']} />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <Drawer anchor="left" open={state.open}>
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button key={content['home']}>
              <ListItemIcon>
                <AppsIcon />
              </ListItemIcon>
              <ListItemText primary={content['home']} />
            </ListItem>
            <ListItem button key={content['fieldAgent']}>
              <ListItemIcon>
                <BusinessCenterIcon />
              </ListItemIcon>
              <ListItemText primary={content['fieldAgent']} />
            </ListItem>
            <ListItem button key={content['support']}>
              <ListItemIcon>
                <LiveHelpIcon />
              </ListItemIcon>
              <ListItemText primary={content['support']} />
            </ListItem>
            <ListItem button key={content['contact']}>
              <ListItemIcon>
                <AttachMoneyIcon />
              </ListItemIcon>
              <ListItemText primary={content['contact']} />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <div>
          {buckets['main'].map((component) => (
            <React.Fragment key={component}>{component}</React.Fragment>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Header;
