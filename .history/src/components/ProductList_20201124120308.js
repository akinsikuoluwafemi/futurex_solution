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
            <div className="prod-item prod-item-7">7</div>
            <div className="prod-item prod-item-8"></div>
            <div className="prod-item prod-item-9"></div>
            <div className="prod-item prod-item-10"></div>
            <div className="prod-item prod-item-11"></div>
            <div className="prod-item prod-item-12"></div>
            <div className="prod-item prod-item-13"></div>
            <div className="prod-item prod-item-14"></div>
            <div className="prod-item prod-item-15"></div>
            <div className="prod-item prod-item-16"></div>
            <div className="prod-item prod-item-17"></div>
            <div className="prod-item prod-item-18"></div>
            <div className="prod-item prod-item-19"></div>
            <div className="prod-item prod-item-20"></div>
        ProductList
      </div>
    );
}
