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

        <a
          class="container-link"
          href="https://www.amazon.com/Drunk-Tank-Pink-Unexpected-Hardcover/dp/B00ZY8UVNY/ref=sr_1_2?crid=2WPDW9HNGFR45&keywords=drunk+tank+pink&qid=1577290027&s=books&sprefix=drunk+tank+%2Cstripbooks-intl-ship%2C418&sr=1-2"
          target="_blank"
        >
          <figure class="container-figure">
            <img class="img" src={pic} alt="Drunk tank pink image" />
            <p class="container-text">Drunk Tank Pink</p>
            <span>Adam Alter</span>
          </figure>
        </a>

        <a
          class="container-link"
          href="https://www.amazon.com/Moment-Lift-Empowering-Women-Changes/dp/1250313570/ref=sr_1_1?crid=2GZFXYREM8W1F&keywords=the+moment+of+lift&qid=1577290071&s=books&sprefix=momemt%2Cstripbooks-intl-ship%2C385&sr=1-1"
          target="_blank"
        >
          <figure class="container-figure">
            <img class="img" src={pic} alt="Moment of lift image" />
            <p class="container-text">Moment of Lift</p>
            <span>Melinda Gates</span>
          </figure>
        </a>

        <a
          class="container-link"
          href="https://www.amazon.com/The-Infinite-Game/dp/B07DKHFTB7/ref=sr_1_1?adgrpid=80389602894&gclid=Cj0KCQiArozwBRDOARIsAHo2s7uRcAAmrh7GuRX6_q1jVjT-J7USI31W8B-Ye6wwj7vXqIvpbe7iRLMaAj-GEALw_wcB&hvadid=393493445443&hvdev=c&hvlocphy=1029744&hvnetw=g&hvpos=1t1&hvqmt=b&hvrand=11467443141882793247&hvtargid=kwd-424737676000&hydadcr=28018_11663316&keywords=simon+sinek+infinite+game&qid=1577290184&sr=8-1"
          target="_blank"
        >
          <figure class="container-figure">
            <img class="img" src={pic} alt="The infinite game image" />
            <p class="container-text">The Infinite Game</p>
            <span>Simon Sinek</span>
          </figure>
        </a>

        <a
          class="container-link"
          href="https://www.amazon.com/Fifty-Million-Rising-Generation-Transforming/dp/156858590X/ref=sr_1_1?crid=1YZWW8Z5X47QQ&keywords=fifty+million+rising&qid=1577290224&sprefix=fifty+million+rising%2Caudible%2C350&sr=8-1"
          target="_blank"
        >
          <figure class="container-figure">
            <img class="img" src={pic} alt="50 million rising image" />
            <p class="container-text">Fifty Million Rising</p>
            <span>Saadia Zahidi</span>
          </figure>
        </a>

        <a
          class="container-link"
          href="https://www.amazon.com/Dataclysm-Identity-What-Online-Offline-Selves-ebook/dp/B00J1IQUX8/ref=as_li_ss_tl?s=books&ie=UTF8&qid=1503090076&sr=1-1&keywords=dataclysm&linkCode=sl1&tag=raggwrit-20&linkId=287c52e15e1047e5394a4a21d6c49b1e"
        >
          <figure class="container-figure">
            <img class="img" src={pic} alt="Dataclysm image" />
            <p class="container-text">Dataclysm, Who we are</p>
            <span>Christian Rudder</span>
          </figure>
        </a>

        <a
          class="container-link"
          href="https://www.amazon.com/360-Degree-Leader-Developing-Organization/dp/1400203597/ref=sr_1_1?crid=3JNR0GJ52CAIK&keywords=the+360+degree+leader+by+john+maxwell&qid=1577290437&sprefix=the+360+deg%2Caps%2C347&sr=8-1"
          target="_blank"
        >
          <figure class="container-figure">
            <img class="img" src={pic} alt="The 360 degree Leader" />
            <p class="container-text">The 360&deg; Leader</p>
            <span>John C. Maxwell</span>
          </figure>
        </a>

        <a
          class="container-link"
          href="https://www.amazon.com/One-More-Thing-Stories-Contemporaries/dp/0804169780/ref=sr_1_1?crid=3MJP97MU76OAQ&keywords=one+more+thing+by+b.j.+novak&qid=1577290476&sprefix=one+more+thing%2Caps%2C351&sr=8-1"
          target="_blank"
        >
          <figure class="container-figure">
            <img class="img" src={pic} alt="one more thing image" />
            <p class="container-text">One more Thing</p>
            <span>B.J. Novak</span>
          </figure>
        </a>

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
