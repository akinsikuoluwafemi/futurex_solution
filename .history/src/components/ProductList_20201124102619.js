import React , {useContext} from 'react';
import {ProductDataContext } from '../context';

export default function ProductList() {
    
    const {productData, setProductData} = useContext(ProductDataContext);
    
    return (
        <div>
            ProductList
        </div>
    )
}
