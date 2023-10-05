import React, {useState} from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//import AuthContext from './auth-context';
//import { auth } from '../Config/Firebase'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { Alert } from 'react-bootstrap';


const Header = () => {
//   const authCtx = useContext(AuthContext);
//   const isLoggedIn = authCtx.isLoggedIn;
const navigate = useNavigate();
const [error, setError] = useState(null);

  const logoutHandler = () => {
    //authCtx.logout();
    const auth = getAuth();
    signOut(auth).then(() => {
      alert("signout Successfull")
    }).catch((error) => {
      const errorMessage = error.message;
      setError(errorMessage);
      
    });
    navigate("/");
  };

  return (
    <Navbar bg="light" expand="lg" className="mb-4">
      <Container>
        {/* Add your logo or brand name */}
        <Navbar.Brand as={Link} to="/">
          Expense Tracker App
        </Navbar.Brand>

        {/* The following component will display a "hamburger" icon for mobile devices */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Collapsible menu items */}
          <Nav className="justify-content-center flex-grow-1 pe-3 me-auto">
          <>
                <Nav.Link as={Link} to="/home">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
                <Button onClick={logoutHandler}>Logout</Button>
                {error && <Alert variant='danger'>{error}</Alert>}
              </>
          </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
