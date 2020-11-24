import React , {useContext} from 'react';
import {ProductDataContext } from '../context';

export default function ProductList() {
    
    const { productData, setProductData } = useContext(ProductDataContext);
    
    
    return (
        <div className="productlist">
            <div className="prod-item prod-item-1">1</div>
            <div className="prod-item prod-item-2">2</div>
            <div className="prod-item prod-item-3">3</div>
            <div className="prod-item prod-item-4">4</div>
            <div className="prod-item prod-item-5">5</div>
            <div className="prod-item prod-item-6">6</div>
            <div className="prod-item prod-item-7"></div>
            <div className="prod-item prod-item-8"></div>
            <div className="prod-item prod-item-9"></div>
            <div className="prod-item prod-item-10"></div>
            <div className="prod-item prod-item-11"></div>
            <div className="prod-item prod-item-12"></div>
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
