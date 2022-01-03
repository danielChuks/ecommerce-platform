import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../../components/Layout';
import data from '../../utlis/data';
import NextLink from 'next/link'
import { Link, Grid, ListItem, List, Typography, Card, Button}  from '@material-ui/core';
import useStyles from '../../utlis/styles';
import Image from 'next/image'



export default function ProductsScreen() {
    const classes = useStyles();
    const router = useRouter();
    const { slug } = router.query
    // we are calling the find function to find the Element that matches the products in the data.js
    //using react router to fetch  the product from data. product to compare with what is in the url
    const product = data.products.find((e) => e.slug === slug)
    if(!product){
        return <div> Product Not Found </div>
    }else {
        return (
            <Layout title={product.name}>
                <div className={classes.section}>
                    <NextLink href="/" passHref>
                        <Link> back to products </Link>
                    </NextLink>
                </div>
                <Grid container spacing={1}>
                    <Grid item md={6} xs={12}>
                        <Image
                            src={product.image} 
                            alt={product.name} 
                            width={640} 
                            height={640}
                            layout="responsive">
                        </Image>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <List>
                            <ListItem> <Typography component='h1'> Name: {product.name} </Typography></ListItem>
                            <ListItem> <Typography> Category: {product.category} </Typography></ListItem>
                            <ListItem> <Typography> Brand:  {product.brand} </Typography> </ListItem>
                            <ListItem> <Typography> Rating: {product.rating} stars ({product.numReviews} reviews)</Typography>  </ListItem>
                            <ListItem> <Typography>  Description:  {product.description }</Typography> </ListItem> 
                        </List>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <Card>
                            <List>
                                <ListItem>
                                    <Grid container>
                                        <Grid item xs={6}>
                                            <Typography>Price:</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography> N{product.price}</Typography>
                                        </Grid>
                                    </Grid>
                                    </ListItem>
                                    <ListItem>
                                    <Grid container>
                                        <Grid item xs={6}>
                                            <Typography>Status:</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography>{product.countInStock > 0 ? 'In Stock' : 'Unavailable'}</Typography>
                                        </Grid>
                                    </Grid>
                                </ListItem>
                                <ListItem>
                                    <Button fullWidth variant='contained' color="primary">
                                        Add to Cart
                                    </Button>
                                </ListItem>
                            </List>
                        </Card>
                    </Grid>
                </Grid>
            </Layout>
        )
    }
  
}
