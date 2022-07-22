import React from "react";
import { Link } from "react-router-dom";
import SignInForm from "../../components/forms/sign-in-form/SignInForm";

export const SignInPage = () => {
  //   const location = useLocation();
  //   const navigate = useNavigate();

  //   useEffect(() => {
  //     console.log("location :>> ", location);
  //     console.log("navigate :>> ", navigate);
  //   }, [location]);

  //   const goToSignUp = () => {
  //     navigate("/sign-up");
  //   };

  return (
    <div>
      <h1>Hello In Sign-IN</h1>
      {/* <button onClick={goToSignUp}> Go to Sign Up</button> */}
      <Link to="/sign-up">Go To Sign Up</Link>
      <SignInForm />
    </div>
  );
};
