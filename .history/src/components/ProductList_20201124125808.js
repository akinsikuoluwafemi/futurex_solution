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

        <a
          class="container-link"
          href="https://www.amazon.com/Find-Your-Why-Practical-Discovering/dp/0143111728/ref=sr_1_1?crid=3IUTW93387T3J&keywords=find+your+why+simon+sinek&qid=1577290511&sprefix=find+your+why%2Caps%2C358&sr=8-1"
          target="_blank"
        >
          <figure class="container-figure">
            <img class="img" src={pic} alt="Find your why image" />
            <p class="container-text">Find Your Why</p>
            <span>Simon Sinek</span>
          </figure>
        </a>

        <a
          class="container-link"
          href="https://www.amazon.com/Beautiful-Code-Leading-Programmers-Practice/dp/0596510047"
          target="_blank"
        >
          <figure class="container-figure">
            <img class="img" src={pic} />
            <p class="container-text">Beautiful Code</p>
            <span>O' Riley</span>
          </figure>
        </a>

        <a
          class="container-link"
          href="https://www.amazon.com/Algorithms-Live-Computer-Science-Decisions/dp/1627790365"
          target="_blank"
        >
          <figure class="container-figure">
            <img class="img" src={pic} alt="Algorithms to live by image" />
            <p class="container-text">Algorithms to live by</p>
            <span>Brian Christian and Tom Griffiths</span>
          </figure>
        </a>
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
