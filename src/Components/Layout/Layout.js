import { Link, Outlet } from "react-router-dom";
import { BtnContainer, Container, Logo, Nav, NavBtn } from "./Layout.styled";
import { useState } from "react";
import Modal from "../Modal/Modal";
import Registration from "../Registration/Registration";
import LogIn from "../LogIn/LogIn";

function Layout() {
  const [isLogInOpen, setIsLogInOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  return (
    <Nav>
      <Container>
        <Logo>Psychologists</Logo>
        <Link style={{ marginRight: "40px" }} to="/">
          Home
        </Link>
        <Link to="/about">Psychologists</Link>
        <BtnContainer > 
          {" "}
          <NavBtn onClick={() => setIsLogInOpen(true)} style={{ marginRight: "8px" }}>Log in</NavBtn>
          <NavBtn onClick={() => setIsRegistrationOpen(true)}>Registration</NavBtn>
        </BtnContainer>
      </Container>
      {isLogInOpen && (
        <Modal isOpen={isLogInOpen} onClose={() => setIsLogInOpen(false)}>
          <LogIn onClose={() => setIsLogInOpen(false)} />
        </Modal>
      )}


      {/* Модальне вікно Registration */}
      {isRegistrationOpen && (
        <Modal isOpen={isRegistrationOpen} onClose={() => setIsRegistrationOpen(false)}>
          <Registration onClose={() => setIsRegistrationOpen(false)} />
        </Modal>
      )}



      <Outlet />
    </Nav>
  );
}

export default Layout;
