import React , {useContext} from 'react';
import {ProductDataContext } from '../context';

export default function ProductList() {
    
    const { productData, setProductData } = useContext(ProductDataContext);
    
    
    return (
        <div className="productlist">
            <div className="prod-item prod-item-1"></div>
            <div className="prod-item prod-item-2"></div>
            <div className="prod-item prod-item-3"></div>
            <div className="prod-item prod-item-4"></div>
            <div className="prod-item prod-item-1"></div>
            <div className="prod-item prod-item-1"></div>
            <div className="prod-item prod-item-1"></div>
            <div className="prod-item prod-item-1"></div>
            <div className="prod-item prod-item-1"></div>
            <div className="prod-item prod-item-1"></div>
            <div className="prod-item prod-item-1"></div>
            <div className="prod-item prod-item-1"></div>
            <div className="prod-item prod-item-1"></div>
            <div className="prod-item prod-item-1"></div>
            <div className="prod-item prod-item-1"></div>
            <div className="prod-item prod-item-1"></div>
            <div className="prod-item prod-item-1"></div>
            <div className="prod-item prod-item-1"></div>
            <div className="prod-item prod-item-1"></div>
            <div className="prod-item prod-item-1"></div>
        ProductList
      </div>
    );
}
