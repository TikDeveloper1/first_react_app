import React from "react";
import { Link } from "react-router-dom";
import SignUpForm from "../../components/forms/sign-up-form/SignUpForm";
import Layout from "../../layout/Layout";
// import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  //   const navigate = useNavigate();

  //   const goToSignIn = () => {
  //     navigate("/sign-in");
  //     navigate({
  //       pathname: "/sign-in",
  //     });
  //   };

  return (
    <Layout>
      <h1>Hello In Sign-Up</h1>
      {/* <button onClick={goToSignIn}> Go to Sign In</button> */}
      <Link to="/sign-in">Go To Sign In</Link>
      <SignUpForm />
    </Layout>
  );
};

export default SignUpPage;
