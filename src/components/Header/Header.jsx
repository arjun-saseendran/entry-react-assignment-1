import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import cartZone from '../../assets/images/cartZone.jpg'
import dp from '../../assets/images/dp.png'


function Header() {
  return (
    <Navbar expand="lg" style={{ background: "#102C57" }}>
      <Container fluid>
        <Navbar.Brand className="text-white" href="#">
          <img
            src={cartZone}
            height="50px"
            style={{ border: "1px solid balck", borderRadius: "50%" }}
            alt="logo"
          />
          Zone
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="text-white">Home</Nav.Link>
            <Nav.Link className="text-white">Shop</Nav.Link>
            <Nav.Link className="text-white">Cart</Nav.Link>
            <Nav.Link className="text-white">Orders</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Nav.Link>
          <img
            src={dp}
            height="50px"
            style={{ border: "1px solid balck", borderRadius: "50%" }}
            alt="logo"
          />
        </Nav.Link>
      </Container>
    </Navbar>
  );
}

export default Header;
