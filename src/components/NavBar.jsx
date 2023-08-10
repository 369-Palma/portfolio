import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Nav
      className="navBar w-75 mx-auto flex-nowrap"
      variant="pills"
      defaultActiveKey="/"
    >
      <Nav.Item>
        <Link to="/">HOME </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/about" eventKey="link-1">
          ABOUT
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/porfolio" eventKey="link-2">
          WORKS
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/contacts" eventKey="link-3">
          CONTACTS
        </Link>
      </Nav.Item>
    </Nav>
  );
};
export default NavBar;
