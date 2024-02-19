import React from 'react';
import "./tokenomics.css";
import tokenomicsDesktop from "../../assets/tokenomics/tokenomicsDesktop.png";
import tokenomicsMemes from '../../assets/tokenomics/tokenomicsMemes.svg';
import analos from '../../assets/tokenomics/analos.svg';

import tokenomicsMemesMobile from '../../assets/tokenomics/tokenomicsMemesMobile.svg';
import tokenomicsMobile from '../../assets/tokenomics/tokenomicsMobile.svg';

export default function Tokenomics() {
  return (
    <>
    <div className='container-fluid bg-black pb-1'>
        <div className='row text-center text-white'>
        <h1>TOKENOMICS</h1>
        </div>
        <div className='row'>
            <div className='desktopMainDiv'>
                <img src={tokenomicsDesktop} alt="tokenomicsDesktop" className='tokenomicsDesktop'/>
                <img src={tokenomicsMemes} alt="tokenomicsMemes" className='tokenomicsMemes '/>
                <img src={analos} alt="analos" className='analos w-25'/>
            </div>
        </div>
        <div className='line-footer text-white mt-5'>© Copyright 2023. All RIghts Reserved
        </div>
      
    </div>
      
    </>
  )
}
