import { useDispatch, useSelector } from "react-redux";
import {
  BtnContainer,
  Button,
  ConditionContainer,
  Container,
  NavBtn,
  NavBtnLogOut,
  NavigationLink,
  UserIcon,
  UserName,
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

  const userName = useSelector((state) => state.user.user?.name);

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

              <BtnContainer>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "14px",
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
                  <UserName>{userName}</UserName>
                </div>
                <NavBtnLogOut
                  onClick={() => {
                    dispatch(logOut());
                    toggleBurgerMenu();
                    navigate("/");
                  }}
                >
                  Log Out
                </NavBtnLogOut>
              </BtnContainer>
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
