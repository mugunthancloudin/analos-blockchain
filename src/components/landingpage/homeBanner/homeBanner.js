import React, { useState } from "react";
import styles from "./Banner.module.css";
import home_img from "../../assets/images/Arodnap FONT-01.png";
import logo from "../../assets/images/LOGO ONLY.png";
import { Link } from "react-scroll";

function HomeBanner() {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState(false);

  function changeColor() {
    if (window.scrollY >= 300) {
      setColor(true);
    } else {
      setColor(false);
    }
  }

  window.addEventListener("scroll", changeColor);
  return (
    <>
      <section className={`${styles.banner_container} container-fluid`}>
        <div className="row">
          <div className="col-12">
            {/* <div
              className={`d-flex align-items-center justify-content-between ${styles.nav}`}
            >
              <div className={`${styles.nav_img}`}>
                <img src={home_img} alt="alt" />
              </div>
              <div className={`d-lg-flex align-items-center d-none`}>
                <div className="fs-25 fw-500 text-white me-3">Main</div>
                <div className="fs-25 fw-500 text-white me-3">Tokenomics</div>
                <div className="fs-25 fw-500 text-white me-3">Whitepaper</div>
              </div>

              <div className="d-lg-block d-none">
                <button className={`${styles.nav_btn}`}>Buy Now</button>
              </div>
            </div> */}

            <nav>
              <div
                className={`container-fluid px-3 ${
                  color ? styles.nav_container_color : styles.nav_container
                }`}
              >
                <div className={`${styles.nav_div_parent}`}>
                  <div className={`${styles.nav_brand}`}>
                    <img src={logo} alt="img" />
                  </div>

                  <div className={`${styles.nav_route}  d-md-block d-none`}>
                    <ul className={`${styles.nav_ul}`}>
                      <li>
                        <Link
                          activeClass="active"
                          style={{ cursor: "pointer" }}
                          to="home"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                          onClick={() => setNav(!nav)}
                        >
                          Main
                        </Link>
                      </li>
                      <li>
                        <Link
                          activeClass="active"
                          style={{ cursor: "pointer" }}
                          to="feature"
                          spy={true}
                          smooth={true}
                          offset={-160}
                          duration={500}
                          onClick={() => setNav(!nav)}
                        >
                          Tokenomics
                        </Link>
                      </li>
                      <li>
                        <Link
                          activeClass="active"
                          style={{ cursor: "pointer" }}
                          to="download"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                          onClick={() => setNav(!nav)}
                        >
                          Whitepaper
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className={`${styles.nav_btn_div} d-md-block d-none`}>
                    <button className={`${styles.nav_btn}`}>Buy Now</button>
                  </div>
                </div>

                <div className={`position-relative mt-md-0 mt-2`}>
                  <div className={`${styles.hamburger_menu}`}>
                    <button
                      className="d-flex align-items-center"
                      onClick={() => setNav(!nav)}
                    >
                      <span className="uc px-1">Menu</span>{" "}
                      <div>
                        <div className={`${styles.bar}`}></div>
                        <div className={`${styles.bar}`}></div>
                        <div className={`${styles.bar}`}></div>
                      </div>
                    </button>

                    <div
                      style={{
                        maxHeight: nav ? "200px" : 0,
                        transition: "max-height 0.5s ease-in-out",
                      }}
                      className={`${styles.nav_route_active} d-md-none d-block`}
                    >
                      <ul className={`${styles.nav_ul}`}>
                        <li onClick={() => setNav(!nav)}>
                          <Link
                            activeClass="active"
                            style={{ cursor: "pointer" }}
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                          >
                            Main
                          </Link>
                        </li>
                        <li onClick={() => setNav(!nav)}>
                          <Link
                            activeClass="active"
                            style={{ cursor: "pointer" }}
                            to="feature"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                          >
                            Tokenomics
                          </Link>
                        </li>
                        <li onClick={() => setNav(!nav)}>
                          <Link
                            activeClass="active"
                            style={{ cursor: "pointer" }}
                            to="download"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                          >
                            Whitepaper
                          </Link>
                        </li>
                        <li onClick={() => setNav(!nav)}>
                          <Link
                            activeClass="active"
                            style={{ cursor: "pointer" }}
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                          >
                            Buy Now
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          <div className={`col-12 ${styles.banner_content_div}`}>
            <div>
              <div className={`${styles.banner_img}`}>
                <img src={home_img} alt="img" />
              </div>
              <h2 className={`${styles.banner_h2} mt-4`}>
                Look Right, Move Left
              </h2>
              <h6 className={`${styles.banner_h6} mt-3`}>
                $Arodnap is the First Reverse Token Created on ERC404
              </h6>

              <div className={`${styles.banner_btn_div}`}>
                <button className={`${styles.banner_btn}`}>
                  Our Social Media
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeBanner;
