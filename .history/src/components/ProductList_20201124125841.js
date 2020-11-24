import React , {useContext} from 'react';
import { ProductDataContext } from '../context';
import pic from '../images/pic.jpg';
import { Link } from 'react-router-dom';


export default function ProductList() {
    
    const { productData, setProductData } = useContext(ProductDataContext);
    
    
    return (
      <div className="containerr">
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
        <a
          class="container-link"
          href="https://www.amazon.com/Your-Brain-Time-Machine-Neuroscience/dp/0393247945/ref=as_li_ss_tl?ie=UTF8&linkCode=sl1&tag=raggwrit-20&linkId=ca9bc2d4f665460189031d05ff1a2e2d"
          target="_blank"
        >
          <figure class="container-figure">
            <img
              class="img"
              src={pic}
              alt="Your brain is a time machine image"
            />
            <p class="container-text">Your Brain is a Time machine</p>
            <span>Dean Buonomano</span>
          </figure>
        </a>
      </div>
    );
}
