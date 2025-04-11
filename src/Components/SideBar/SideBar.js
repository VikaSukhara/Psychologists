import { useDispatch, useSelector } from "react-redux";
import { Button, Container, NavBtn, NavigationLink, Wrap } from "./SideBar.styled";
import { logOut } from "../redux/userSlice";

const SideBarMenu = ({ toggleBurgerMenu, onOpenLogIn, onOpenRegistration }) => {
  const isLoggin = useSelector((state) => state.user.isLoggin);
  const dispatch = useDispatch();

  return (
    <div
    //   style={{
    //     width: "100vw",
    //     height: "100vh",
    //     backgroundColor: "rgba(0, 0, 0, 0.5)",
    //     position: "fixed",
    //   }}
    >
      {isLoggin ? (
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
          <h3>Home</h3>
          <h3>Psychologists</h3>
          <button
            onClick={() => {
              console.log("click");
              dispatch(logOut());
            }}
          >
            Log Out
          </button>
        </Container>
      ) : (
        <Container>
          <Button onClick={toggleBurgerMenu} type="button">
            <svg
              width="32"
              height="32"
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
            {" "}
            <NavigationLink to="/">Home</NavigationLink>
            <NavigationLink to="/specialists" style={{marginBottom: "50px"}}>Psychologists</NavigationLink>
            <NavBtn onClick={onOpenLogIn}>Log In</NavBtn>
            <NavBtn onClick={onOpenRegistration}>Register</NavBtn>
          </Wrap>
        </Container>
      )}
    </div>
  );
};

export default SideBarMenu;
