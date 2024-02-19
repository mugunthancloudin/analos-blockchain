import React from 'react';
import "./roadmap.css";
import roadmapImage from '../../assets/roadmap/roadmapDesktop.svg';
import roadmapMobileImage from '../../assets/roadmap/roadmapMobile.png';
import memesRoadmapMobileImage from '../../assets/roadmap/memesRoadmapMemsMobile.svg';
import memesRoadmapImage from '../../assets/roadmap/memesRoadmapMemsMobile.svg';

export default function Roadmap() {
  return (
    <>
      <div className="bg-black text-white action2 text-center pb-5">
      <div className="roadmap-title py-3"><h1 className='fw-bold'>ROADMAP</h1></div>
      <div className="roadmap-text mb-5">
        <h5>
        PUMP, PUMP, PUMP, PUMP, PUMP, PUMP, PUMP, PUMP,
        <br />
        DUMP, PUMP, PUMP, DUMP, PUMP, PUMP, DUMP, DUMP
        </h5>

      </div>
      <div className='position-relative'>
        <div className='mainImg'>
        <img id="roadmap" className="roadmap desktop-only" src={roadmapImage} alt="Roadmap"  />
      <img className="roadmap-mobile mobile-only" src={roadmapMobileImage} alt="Roadmap Mobile" />
        </div>
        <div className='roadmapMems'>
        <img className="roadmapMemesMobile mobile-only" src={memesRoadmapMobileImage} alt="Memes Roadmap Mobile" />
      <img className="memes-roadmap desktop-only" src={memesRoadmapImage} alt="Memes Roadmap" />
        </div>
      </div>
      <div className='maptestiBg'>
        <div className='col-lg-6 col-sm-12'>
        <p
        h5 className='mt-1 roadmapFont'>GRAB YOUR ANALOS AND MOONWALK TO THE MOON – IT'S THE ONLY WAY TO GO FORWARD</p>
        <button className='roadmap-btn fw-bold'>BUY NOW</button>
        </div>
      </div>
    </div>
    </> 
  )
}
