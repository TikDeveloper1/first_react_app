import React, { useEffect, useState } from "react";
import { BaseInput } from "../../common/BaseInput";
// import cx from "classnames";

const SignInForm = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    firstName: "",
  });

  useEffect(() => {
    console.log(inputs);
  }, [inputs]);

  const handleInput = (value, name) => {
    setInputs((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <div>
      <BaseInput
        type="text"
        name="email"
        label="Email Address"
        value={inputs.email}
        changeValue={handleInput}
        placeholder="Enter Your Email"
      />
      <BaseInput
        type="text"
        name="firstName"
        label="First Name"
        value={inputs.firstName}
        changeValue={handleInput}
        placeholder="Enter Your First Name"
      />
      <BaseInput
        type="password"
        label="Password"
        name="password"
        value={inputs.password}
        changeValue={handleInput}
        placeholder="Enter Your Password"
      />
      {/* 
        CX orinak
      <div
        className={cx("", {
          isActive: Boolean(inputs.email),
          isDanger: Boolean(inputs.password),
        })}
      ></div> */}
    </div>
  );
};

export default SignInForm;
