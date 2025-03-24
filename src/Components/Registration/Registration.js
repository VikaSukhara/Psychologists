import { Button, ButtonSignUp, H2, P } from "./Registration.styled";


function Registration({onClose}){
   
    return(
        <div>
                  <Button onClick={onClose}>
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
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8 8L24 24"
                        stroke="#191A15"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </Button>
            <H2>Registration</H2>
            <P>Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information.</P>
            <input type="text" name="name" id="name" />
            <ButtonSignUp>Sign Up</ButtonSignUp>
            
        </div>
    )
}

export default Registration;