import { Outlet } from "react-router-dom";
import {
  BtnContainer,
  Container,
  Logo,
  Nav,
  NavBtn,
  NavigationLink,
  UserIcon,
  UserName,
} from "./Layout.styled";
import Modal from "../Modal/Modal";
import Registration from "../Registration/Registration";
import LogIn from "../LogIn/LogIn";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { logoutUser } from "../redux/action";

function Layout() {
  const dispatch = useDispatch();
  const isLoggin = useSelector((state) => state.isLoggin);
  const user = useSelector((state) => state.user);

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
          <NavigationLink style={{ marginRight: "40px" }} to="/">
            {" "}
            Home
          </NavigationLink>
          <NavigationLink style={{ marginRight: "40px" }} to="/psychologists">
            Psychologists
          </NavigationLink>
          <NavigationLink to="/favourite">Favourite</NavigationLink>
          <BtnContainer>
            {" "}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap:"14px"
              }}
            >
              <UserIcon>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12C10.9391 12 9.92172 11.5786 9.17157 10.8284C8.42143 10.0783 8 9.06087 8 8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4ZM12 14C16.42 14 20 15.79 20 18V20H4V18C4 15.79 7.58 14 12 14Z"
                    fill="#FBFBFB"
                  />
                </svg>
              </UserIcon>
              <UserName>{user.name}</UserName>
            </div>
            <NavBtn
              onClick={() => dispatch(logoutUser())}
              style={{ marginRight: "8px" }}
            >
              LogOut
            </NavBtn>
          </BtnContainer>
        </Container>
      ) : (
        <Container>
          {" "}
          <Logo>Psychologists</Logo>
          <NavigationLink style={{ marginRight: "40px" }} to="/">
            Home
          </NavigationLink>
          <NavigationLink to="/psychologists">Psychologists</NavigationLink>
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
