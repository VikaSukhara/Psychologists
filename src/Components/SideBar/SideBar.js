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

const SideBarMenu = ({ toggleBurgerMenu, onOpenLogIn, onOpenRegistration }) => {
  const isLoggin = useSelector((state) => state.user.isLoggin);
  const dispatch = useDispatch();

  return (
    <div>
      <Container>
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
          <NavigationLink
            to="/specialists"
            style={{ marginBottom: "70px" }}
            onClick={toggleBurgerMenu}
          >
            Psychologists
          </NavigationLink>

          {isLoggin ? (
            <ConditionContainer>
              <NavigationLink to="/favourite">Favourite</NavigationLink>
              <NavBtn
                onClick={() => {
                  console.log("click");
                  dispatch(logOut());
                }}
              >
                Log Out
              </NavBtn>
            </ConditionContainer>
          ) : (
            <ConditionContainer>
              <NavBtn onClick={onOpenLogIn}>Log In</NavBtn>
              <NavBtn onClick={onOpenRegistration}>Register</NavBtn>
            </ConditionContainer>
          )}
        </Wrap>
      </Container>
    </div>
  );
};

export default SideBarMenu;
