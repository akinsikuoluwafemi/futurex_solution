import React , {useContext} from 'react';
import { ProductDataContext } from '../context';
import pic from '../images/pic.jpg';

export default function ProductList() {
    
    const { productData, setProductData } = useContext(ProductDataContext);
    
    
    return (
        <div className="productlist">
            <div>
                
            </div>
      </div>
    );
}
