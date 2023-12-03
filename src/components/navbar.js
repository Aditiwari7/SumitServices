import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';

function navbar() {
  return (
    <Navbar expand="lg" className="" style={{padding:1.5, height:80}}>
      <Container >
        <Navbar.Brand href="#home" style={{fontSize:35}}>Sumit Services</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" class='d-flex' style={{fontSize: 20}}>
          <Nav className="me-auto text-end">
            <Nav.Link href="#home" className='text-end'>Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;
// class="d-flex"