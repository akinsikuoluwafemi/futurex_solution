import React, {useContext} from 'react';
import {ProductDataContext } from '../context';

export default function ShoppingCart() {
    
    let {ProductData, setP} = useContext(ProductDataContext)

    return (
        <div>
            Cart page
        </div>
    )
}
