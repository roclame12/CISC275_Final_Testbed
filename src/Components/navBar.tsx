import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const containerStyle = {
  paddingTop: "20px",
  paddingLeft: "20px",
  paddingRight: "20px"// Adjust as needed
};

const navLinkStyle = {
  fontSize: "1.5rem", // Adjust the font size as needed
}; 

export function NavB() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container fluid className="p-0" style={containerStyle}>
        <Navbar.Brand as={Link} to="/" style={navLinkStyle} >Career Finder</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/basic-test" style={navLinkStyle} >Basic Test</Nav.Link>
          <Nav.Link as={Link} to="/detailed-test"style={navLinkStyle} >Detailed Test</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
