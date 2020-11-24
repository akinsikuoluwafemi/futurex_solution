import React , {useContext} from 'react';
import { ProductDataContext } from '../context';
import pic from '../images/pic.jpg';

export default function ProductList() {
    
    const { productData, setProductData } = useContext(ProductDataContext);
    
    
    return (
        <div className="productlist">
            <div className="prod-item prod-item-1">
                <img src={ pic} alt="pic-one"/>
            </div>
            <div className="prod-item prod-item-2">2</div>
            <div className="prod-item prod-item-3">3</div>
            <div className="prod-item prod-item-4">4</div>
            <div className="prod-item prod-item-5">5</div>
            <div className="prod-item prod-item-6">6</div>
            <div className="prod-item prod-item-7">7</div>
            <div className="prod-item prod-item-8">8</div>
            <div className="prod-item prod-item-9">9</div>
            <div className="prod-item prod-item-10">10</div>
            <div className="prod-item prod-item-11">11</div>
            <div className="prod-item prod-item-12">12</div>
            <div className="prod-item prod-item-13">13</div>
            <div className="prod-item prod-item-14">14</div>
            <div className="prod-item prod-item-15">15</div>
            <div className="prod-item prod-item-16">16</div>
            <div className="prod-item prod-item-17">17</div>
            <div className="prod-item prod-item-18">18</div>
            <div className="prod-item prod-item-19">19</div>
            <div className="prod-item prod-item-20">20</div>
      </div>
    );
}
