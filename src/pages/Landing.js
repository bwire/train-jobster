import React from 'react';
import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';
import styled from 'styled-components';

const Wrapper = styled.main`
  h1: {
    font-weight: 700;
    span: {
      color: var(--primary-color);
    }
  }
  p: {
    color: var(--grey-600);
  }
  nav: {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc() (100vh - var() (--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt='jobster logo' className='logo' />
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
