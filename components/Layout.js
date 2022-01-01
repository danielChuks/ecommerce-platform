import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { 
     AppBar,
     Toolbar, 
     Typography, 
     Container ,
     Link} from '@material-ui/core';

import useStyles from '../utlis/styles';

export default function Layout({title, children }) {
    const classes = useStyles();
    return (
        <div>
        {/* this entails the title of the page  */}
            <Head>
                <title> {title ? ` ${title} - Next PCreatives ` : 'Pulchr Creatives'} </title>
            </Head>
            <AppBar position='static' className={classes.navbar}>
                <Toolbar>
                    <NextLink href="/" passHref>
                        <Link><Typography className={classes.brand}> PCreatives </Typography></Link>
                    </NextLink> 
                    {/* this div pushes the codes on the navbar to a side  */}
                <div className={classes.grow}></div>
                {/* the split class creates space between the login and the cart */}
                <div className={classes.split}>
                    <NextLink href="/cart" passHref>
                        <Link><Typography > Cart </Typography></Link>
                    </NextLink> 
                </div>

                <div className={classes.split}>
                    <NextLink href="/login" passHref>
                        <Link><Typography> Login </Typography></Link>
                    </NextLink> 
                </div>

                </Toolbar>
            </AppBar>
            {/* the children is coming from the Layout which enable us to wrap the content in index.js */}
            <Container className={classes.main}>
                {children}
            </Container>
            {/* this is the footer of the page */}
            <footer className={classes.footer}> 
                <Typography>
                    {'All rights reserved. Pulchr Creatives'}
                </Typography>
            </footer>
        </div>
    )
}
