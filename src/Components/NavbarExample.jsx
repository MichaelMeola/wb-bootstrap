import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function NavbarExample() {
  return (
    <Navbar expand='md' bg='primary' data-bs-theme='dark'>
      <Container fluid>
        <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to='/' className="nav-link">Container Fluid</Link>
            <Link to='/column-sizing' className="nav-link">Column Sizing</Link>
            <Link to='/sidebar' className="nav-link">Sidebar</Link>
            <NavDropdown title='More' id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to='/offset' className="nav-link dropdown-link">Offset</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to='/order' className="nav-link dropdown-link">Order</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to='/icons' className="nav-link dropdown-link">Icons</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
