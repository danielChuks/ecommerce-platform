import { useRouter } from 'next/router'
import React from 'react'
import data from '../../utlis/data';

export default function ProductsScreen() {
    const router = useRouter();
    const { slug } = router.query
    // we are calling the find function to find the Element that matches the products in the data.js
    const product = data.products.find((e) => e.slug === slug)
    if(!product){
        return <div> Product Not Found </div>
    }else {
        return (
            <div>
               <h1> {product.name} </h1>
            </div>
        )
    }
  
    
}
