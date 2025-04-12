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

  const SideBarMenu = ({ isOpen, toggleBurgerMenu, onOpenLogIn, onOpenRegistration }) => {
    const isLoggin = useSelector((state) => state.user.isLoggin);
    const dispatch = useDispatch();

    const [visible, setVisible] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);
  
    // Коли isOpen=true — показати компонент і активувати анімацію
    // useEffect(() => {
    //   if (isOpen) {
    //     setShouldRender(true);
    //     setTimeout(() => setVisible(true), 10); // маленька пауза, щоб спрацювала transition
      
    //     const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    //     document.body.style.overflow = 'hidden';
    //     document.body.style.paddingRight = `${scrollBarWidth}px`;
      
    //   } else {

    //     document.body.style.overflow = '';
    //     document.body.style.paddingRight = '';
    //     setVisible(false);
    //     setTimeout(() => setShouldRender(false), 700); // час анімації
      
    //   }
    // }, [isOpen]);

    useEffect(() => {
      if (isOpen) {
        setShouldRender(true);
    
        // Анімація з'явлення: чекаємо рендер і потім вмикаємо видимість
        setTimeout(() => {
          setVisible(true);
        }, 10); // невелика затримка, щоб DOM встиг вставитись
    
        const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${scrollBarWidth}px`;
      } else {
        // Анімація закриття
        setVisible(false);
    
        // Чекаємо 700мс — поки закінчиться transition
        const timeoutId = setTimeout(() => {
          setShouldRender(false);
          document.body.style.overflow = '';
          document.body.style.paddingRight = '';
        }, 700);
    
        return () => clearTimeout(timeoutId); // очистка, якщо буде новий open
      }
    }, [isOpen]);
  
    if (!shouldRender) return null;
    return (
      <div>
        <Container visible={visible} > 
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
