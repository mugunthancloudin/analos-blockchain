import React from "react";
import "./home.css";
import title from "../../assets/home/dogelos.png";
import twitterLogo from "../../assets/home/twitterLogo.svg";
import telegramLogo from "../../assets/home/telegramLogo.svg";
import doge from "../../assets/home/bonk.doge.svg"
import human from "../../assets/home/sbfMobile.png"


export default function Home() {

  const buttonText = "Buy now / ";
  // Generate a long string of repeated text
  const repeatedText = buttonText.repeat(100); 


  return (
    <>
      <div className="container-fluid bg-black homeContainer">
        <div className="row d-flex justify-content-center position-relative">
          <div className="col-lg-6 text-center text-white">
            <img src={title} alt="title" className="title w-100" />
            <h1 className="fw-bold">Look Right, Move Left</h1>
            <h5 className="fw-bold">
              Created as a culmination of all the memeable events on solana
            </h5>

            <div className="mediablock" style={{ zIndex: 1000 }}>
              <div className="mediablock-inside">
                Our Social Media
                <a
                  href="https://twitter.com/ana_iykyk"
                  target="__blank"
                  rel="noopener noreferrer"
                  className="social-item"
                >
                  <img src={twitterLogo} alt="Twitter" className="w-50" />
                </a>
                <a
                  href="https://t.me/analos_coin"
                  target="__blank"
                  rel="noopener noreferrer"
                  className="social-item"
                >
                  <img src={telegramLogo} alt="Telegram" className="w-50" />
                </a>
              </div>
              <span className="contract-text">
                <p className="pt-2"> CA: 7iT1GRYYhEop2nV1dyCwK2MGyLmPHq47WhPGSwiqcUg5</p>
              </span>
            </div>

            <img src={doge} alt="Telegram" className=" homeDoge" />
            <img src={human} alt="human" className=" homeHuman" />

          </div>
        </div>
        {/* <div className="row"> */}
      <div className="footer-line">
        <div className="scroll">
          <div className="RightToLeft">
          {repeatedText}
            {repeatedText}
          </div>
        </div>
      </div>
    {/* </div> */}
      </div>
    </>
  );
}
