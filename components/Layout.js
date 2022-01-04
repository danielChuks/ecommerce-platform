import React, { useState, useEffect} from 'react';
import Head from 'next/head';
import NextLink from 'next/link';

import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Link,
  createTheme,
  ThemeProvider,
  CssBaseline,
  Switch,
} from '@material-ui/core';

import useStyles from '../utlis/styles';
// import Cookies from 'js-cookie';
//import { Store } from '../utlis/store';

export default function Layout({ title, description, children }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if browser contains cookie with name 'darkMode'. If it does, check if its value is 'true', if it is, 
    // set currentMode to true, if not, set currentMode to false.  
    let currentMode = /^true$/i.test(Cookies.get('darkMode'));
    setDarkMode(currentMode)
  }, [])

  //creating a material ui object them to customize our web page
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '1.5rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.3rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
    },
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#f0c000',
      },
      secondary: {
        main: '#208080',
      },
    },
  });
  const classes = useStyles();

  /**
   * @description
   */
  const darkModeChangeHandler = () => {
    Cookies.set('darkMode', !darkMode);
    setDarkMode(!darkMode);
  };
  return (
    <div>
      {/* this entails the title of the page  */}
      <Head>
        <title>
          {' '}
          {title ? ` ${title} - Next PCreatives ` : 'Pulchr Creatives'}{' '}
        </title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Typography className={classes.brand}> PCreatives </Typography>
              </Link>
            </NextLink>
            {/* this div pushes the codes on the navbar to a side  */}
            <div className={classes.grow}></div>
            {/* creating a button to change lighe state of the app */}
            <Switch
              className={classes.line}
              checked={darkMode}
              onChange={darkModeChangeHandler}
            ></Switch>
            {/* the split class creates space between the login and the cart */}
            <div className={classes.split}>
              <NextLink href="/cart" passHref>
                <Link>
                  <Typography> Cart </Typography>
                </Link>
              </NextLink>
            </div>

            <div className={classes.split}>
              <NextLink href="/login" passHref>
                <Link>
                  <Typography> Login </Typography>
                </Link>
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
        {/* the children is coming from the Layout which enable us to wrap the content in index.js */}
        <Container className={classes.main}>{children}</Container>
        {/* this is the footer of the page */}
        <footer className={classes.footer}>
          <Typography>{'All rights reserved. Pulchr Creatives'}</Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
}
