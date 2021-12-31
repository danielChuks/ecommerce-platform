import React from 'react';
import Head from 'next/head';
import { 
     AppBar,
     Toolbar, 
     Typography, 
     Container  } from '@material-ui/core';

import useStyles from '../utlis/styles';

export default function Layout({children }) {
    const classes = useStyles();
    return (
        <div>
        {/* this entails the title of the page  */}
            <Head>
                <title>Pulchr Creatives</title>
            </Head>
            <AppBar position='static' className={classes.navbar}>
                <Toolbar>
                    <Typography>Pulchr</Typography>
                </Toolbar>
            </AppBar>
            {/* the children is coming from the Layout which enable us to wrap the content in index.js */}
            <Container className={classes.main}>
                {children}
            </Container>
            {/* this is the footer of the page */}
            <footer position='static'  className={classes.footer}> 
                <Typography>
                    {'All rights reserved. Pulchr Creatives'}
                </Typography>
            </footer>
        </div>
    )
}
