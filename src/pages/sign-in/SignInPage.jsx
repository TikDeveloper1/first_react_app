import React, { useCallback } from "react";
import { useState } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  // useSearchParams,
} from "react-router-dom";
import SignInForm from "../../components/forms/sign-in-form/SignInForm";
import Layout from "../../layout/Layout";

const SignInPage = () => {
  // const [params] = useSearchParams();
  // console.log(params.get("search"));
  // console.log(params.get("x"));

  // const location = useLocation();

  const navigate = useNavigate();

  // console.log(location);

  //   useEffect(() => {
  //     console.log("location :>> ", location);
  //     console.log("navigate :>> ", navigate);
  //   }, [location]);

  //   const goToSignUp = () => {
  //     navigate("/sign-up");
  //   };
  const [state, setState] = useState(0);
  const awaitState = (newState) =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve(setState(newState));
      }, 0)
    );

  const handleClick = useCallback(async () => {
    await awaitState(1);
    await awaitState(2);
  }, []);

  return (
    <Layout>
      <h1>Hello In Sign-IN</h1>
      <button onClick={handleClick}>Add Counter</button>
      {/* <button onClick={goToSignUp}> Go to Sign Up</button> */}
      <Link to="/sign-up">Go To Sign In</Link>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back
      </button>
      <SignInForm />
    </Layout>
  );
};

export default SignInPage;
