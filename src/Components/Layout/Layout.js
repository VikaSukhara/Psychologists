import { Link, Outlet } from "react-router-dom";
import { BtnContainer, Container, Logo, Nav, NavBtn } from "./Layout.styled";
import Modal from "../Modal/Modal";
import Registration from "../Registration/Registration";
import LogIn from "../LogIn/LogIn";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { logoutUser } from "../redux/action";

function Layout() {
  const dispatch = useDispatch();
  const isLoggin = useSelector((state) => state.isLoggin);

  const [isLogInOpen, setIsLogInOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  const toggleModalLogIn = () => {
    setIsLogInOpen(!isLogInOpen);
  };
  const ToggleModalRegistration = () => {
    setIsRegistrationOpen(!isRegistrationOpen);
  };

  return (
    <Nav>
      
        {isLoggin ? (
          <Container>
            <Logo>Psychologists</Logo>
            <Link style={{ marginRight: "40px" }} to="/">
              Home
            </Link>
            <Link style={{ marginRight: "40px" }} to="/psychologists">
              Psychologists
            </Link>
            <Link to="/favourite">Favourite</Link>
            <BtnContainer>
              {" "}
              <NavBtn onClick={() => dispatch(logoutUser())} style={{ marginRight: "8px" }}>
                LogOut
              </NavBtn>
            </BtnContainer>
            </Container>
        ) : (
          <Container>
            {" "}
            <Logo>Psychologists</Logo>
            <Link style={{ marginRight: "40px" }} to="/">
              Home
            </Link>
            <Link to="/psychologists">Psychologists</Link>
            <BtnContainer>
              {" "}
              <NavBtn
                onClick={() => setIsLogInOpen(true)}
                style={{ marginRight: "8px" }}
              >
                Log in
              </NavBtn>
              <NavBtn onClick={() => setIsRegistrationOpen(true)}>
                Registration
              </NavBtn>
            </BtnContainer>
            </Container>
        )}

   
      {isLogInOpen && (
        <Modal isOpen={isLogInOpen} toggleModal={toggleModalLogIn}>
          <LogIn toggleModal={toggleModalLogIn} />
        </Modal>
      )}

      {isRegistrationOpen && (
        <Modal
          isOpen={isRegistrationOpen}
          toggleModal={ToggleModalRegistration}
        >
          <Registration toggleModal={ToggleModalRegistration} />
        </Modal>
      )}

      <Outlet />
    </Nav>
  );
}

export default Layout;
