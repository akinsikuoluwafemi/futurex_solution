import React , {useContext} from 'react';
import { ProductDataContext } from '../context';
import pic from '../images/pic.jpg';

export default function ProductList() {
    
    const { productData, setProductData } = useContext(ProductDataContext);
    
    
    return (
      <div className="container">
        <div className="row">
          <div className="col">1</div>
          <div className="col">2</div>
          <div className="col">2</div>
          <div className="col"></div>
        </div>

      </div>
    );
}
