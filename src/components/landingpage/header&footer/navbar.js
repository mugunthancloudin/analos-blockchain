import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import "./navbar.css";
import logo from "../../assets/home/LOGO ONLY.png"

function Topbar() {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: "linear",
    });
  };

  return (
    <>
      <Navbar expand="lg" className="bg-black" sticky="fixed">
        <Container>
          <Navbar.Brand
            onClick={scrollToTop}
            style={{ cursor: "pointer" }}
            className="fw-bold  text-white fst-italic"
          >
            <img
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="AIM Logo"
            />
            
          </Navbar.Brand>

          
          <Navbar.Toggle aria-controls="navbarScroll" className="text-white" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-center">
            <Nav className=" navbar-nav-scroll" navbarScroll>
              <ScrollLink
                to="action1"
                // smooth={true}
                duration={100}
                spy={true}
                exact="true"
                className="me-3 text-white fw-bold mt-2 link-underline link-underline-opacity-0"
              >
                Main
              </ScrollLink>
              <ScrollLink
                to="action2"
                // smooth={true}
                duration={200}
                spy={true}
                exact="true"
                className="me-3 text-white fw-bold mt-2 link-underline link-underline-opacity-0"
              >
                Roadmap
              </ScrollLink>

              <ScrollLink
                to="action3"
                // smooth={true}
                duration={600}
                spy={true}
                exact="true"
                className="me-3 text-white fw-bold mt-2 link-underline link-underline-opacity-0"
              >
                Tokenomics
              </ScrollLink>
            </Nav>


            {/* <Nav className="navBtn">
              <button className="">login</button>
            </Nav> */}


          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Topbar;


{/* <Navbar collapseOnSelect expand="lg" className="navBg py-3" sticky="top">
<Container fluid className="navBg">
  <Navbar.Brand href="/" className="brandName">
    <img src={logo} alt="logo" width={30}  className="pb-1 me-2"/>
    WeTask
  </Navbar.Brand>

  <Navbar.Toggle aria-controls="responsive-navbar-nav" />

  <Navbar.Collapse id="responsive-navbar-nav" className="navtop">
    <Nav className="center">
      <Nav.Link href="/campaign" className="text-white ms-3 navTitle">
        Campaign
      </Nav.Link>
      <Nav.Link href="/event" className="text-white ms-3 navTitle">
        Event
      </Nav.Link>
      <Nav.Link href="/space" className="text-white ms-3 navTitle">
        Space
      </Nav.Link>
    </Nav>

    <Nav className="">
      <Nav.Link>
        <button className="Btn"></button>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar> */}