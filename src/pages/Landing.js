import React from 'react';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby affogato cronut gochujang selfies, tofu slow-carb glossier
            tilde enamel pin butcher. DIY next level gluten-free, fashion axe
            cliche polaroid hammock hot chicken prism raw denim. Tousled af
            shaman dreamcatcher plaid, street art ugh readymade semiotics chia
            XOXO gastropub selvage tofu. Before they sold out williamsburg twee
            subway tile.
          </p>
          <button className='btn btn-hero'>Login/Register</button>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
