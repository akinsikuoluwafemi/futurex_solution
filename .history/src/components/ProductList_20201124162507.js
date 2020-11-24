import React , {useContext} from 'react';
import { ProductDataContext } from '../context';
import pic from '../images/pic.jpg';
import { Link } from 'react-router-dom';
import PageTitle from './'


export default function ProductList() {
    
    const { productData, setProductData } = useContext(ProductDataContext);
    

    
    
    return (
      <div className="containerr">
        <Link to="/" class="container-link">
          <figure class="container-figure">
            <img class="img" src={pic} alt="Accidental billionaires image" />
            <p class="container-text">Jewelry</p>
            <span>$ 10.99</span>
            <button className="ml-3 btn btn-primary" onClick={() => alert('click')}>Add to cart</button>
          </figure>
        </Link>

        <Link to="/" class="container-link">
          <figure class="container-figure">
            <img class="img" src={pic} alt="Accidental billionaires image" />
            <p class="container-text">Mens Clothing</p>
                    <span>$12</span>
            <button className="ml-3 btn btn-primary" onClick={() => alert('click')}>Add to cart</button>
                    
          </figure>
        </Link>

        <Link to="/" class="container-link">
          <figure class="container-figure">
            <img class="img" src={pic} alt="Accidental billionaires image" />
            <p class="container-text">Accidental Billionaires</p>
            <span>Ben Mezerich</span>
          </figure>
        </Link>

        <Link to="/" class="container-link">
          <figure class="container-figure">
            <img class="img" src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" alt="Accidental billionaires image" />
            <p class="container-text">Accidental Billionaires</p>
            <span>Ben Mezerich</span>
          </figure>
        </Link>

        <Link to="/" class="container-link">
          <figure class="container-figure">
            <img class="img" src={pic} alt="Accidental billionaires image" />
            <p class="container-text">Accidental Billionaires</p>
            <span>Ben Mezerich</span>
          </figure>
        </Link>

        <Link to="/" class="container-link">
          <figure class="container-figure">
            <img class="img" src={pic} alt="Accidental billionaires image" />
            <p class="container-text">Accidental Billionaires</p>
            <span>Ben Mezerich</span>
          </figure>
        </Link>

        <Link to="/" class="container-link">
          <figure class="container-figure">
            <img class="img" src={pic} alt="Accidental billionaires image" />
            <p class="container-text">Accidental Billionaires</p>
            <span>Ben Mezerich</span>
          </figure>
        </Link>

        <Link to="/" class="container-link">
          <figure class="container-figure">
            <img class="img" src={pic} alt="Accidental billionaires image" />
            <p class="container-text">Accidental Billionaires</p>
            <span>Ben Mezerich</span>
          </figure>
        </Link>

        <Link to="/" class="container-link">
          <figure class="container-figure">
            <img class="img" src={pic} alt="Accidental billionaires image" />
            <p class="container-text">Accidental Billionaires</p>
            <span>Ben Mezerich</span>
          </figure>
        </Link>

        <Link to="/" class="container-link">
          <figure class="container-figure">
            <img class="img" src={pic} alt="Accidental billionaires image" />
            <p class="container-text">Accidental Billionaires</p>
            <span>Ben Mezerich</span>
          </figure>
        </Link>

        <Link to="/" class="container-link">
          <figure class="container-figure">
            <img class="img" src={pic} alt="Accidental billionaires image" />
            <p class="container-text">Accidental Billionaires</p>
            <span>Ben Mezerich</span>
          </figure>
        </Link>

        <Link to="/" class="container-link">
          <figure class="container-figure">
            <img class="img" src={pic} alt="Accidental billionaires image" />
            <p class="container-text">Jewelry</p>
            <span>Ben Mezerich</span>
          </figure>
        </Link>

        <Link to="/" class="container-link">
          <figure class="container-figure">
            <img class="img" src={pic} alt="Accidental billionaires image" />
            <p class="container-text">Accidental Billionaires</p>
            <span>Ben Mezerich</span>
          </figure>
        </Link>

        <Link to="/" class="container-link">
          <figure class="container-figure">
            <img class="img" src={pic} alt="Accidental billionaires image" />
            <p class="container-text">Accidental Billionaires</p>
            <span>Ben Mezerich</span>
          </figure>
        </Link>

        <Link to="/" class="container-link">
          <figure class="container-figure">
            <img class="img" src={pic} alt="Accidental billionaires image" />
            <p class="container-text">Accidental Billionaires</p>
            <span>Ben Mezerich</span>
          </figure>
        </Link>
      </div>
    );
}
