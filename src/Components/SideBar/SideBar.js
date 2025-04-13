import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  ConditionContainer,
  Container,
  NavBtn,
  NavigationLink,
  Wrap,
} from "./SideBar.styled";
import { logOut } from "../redux/userSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SideBarMenu = ({
  isOpen,
  toggleBurgerMenu,
  onOpenLogIn,
  onOpenRegistration,
}) => {
  const isLoggin = useSelector((state) => state.user.isLoggin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    console.log("useEffect отримав isOpen:", isOpen);
    if (isOpen) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [isOpen]);

  return (
    <div>
      <Container visible={visible}>
        <Button onClick={toggleBurgerMenu} type="button">
          <svg
            width="25"
            height="25"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 8L8 24"
              stroke="#191A15"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 8L24 24"
              stroke="#191A15"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
        <Wrap>
          <NavigationLink to="/" onClick={toggleBurgerMenu}>
            Home
          </NavigationLink>
          <NavigationLink to="/specialists" onClick={toggleBurgerMenu}>
            Psychologists
          </NavigationLink>

          {isLoggin ? (
            <ConditionContainer>
              <NavigationLink to="/favourite" onClick={toggleBurgerMenu}>
                Favourite
              </NavigationLink>
              <NavBtn
                style={{ marginTop: "100px" }}
                onClick={() => {
                  dispatch(logOut());
                  toggleBurgerMenu();
                  navigate("/");
                }}
              >
                Log Out
              </NavBtn>
            </ConditionContainer>
          ) : (
            <ConditionContainer>
              <NavBtn
                onClick={() => {
                  onOpenLogIn();
                  navigate("/");
                }}
                style={{ marginTop: "100px" }}
              >
                Log In
              </NavBtn>
              <NavBtn
                onClick={() => {
                  onOpenRegistration();
                  navigate("/");
                }}
              >
                Register
              </NavBtn>
            </ConditionContainer>
          )}
        </Wrap>
      </Container>
    </div>
  );
};

export default SideBarMenu;
