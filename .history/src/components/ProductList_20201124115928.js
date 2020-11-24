import React , {useContext} from 'react';
import {ProductDataContext } from '../context';

export default function ProductList() {
    
    const { productData, setProductData } = useContext(ProductDataContext);
    
    
    return (
        <div className="productlist">
            <div className="p-item p-item-one">

            </div>
            ProductList
        </div>
    )
}
