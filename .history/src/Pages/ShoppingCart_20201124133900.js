import React, {useContext} from 'react';
import {ProductDataContext } from '../context';

export default function ShoppingCart() {
    
    let {ProductData, setProductData} = useContext(ProductDataContext)
    console.log(ProductData)
    return (
        <div>
            Cart page
        </div>
    )
}
