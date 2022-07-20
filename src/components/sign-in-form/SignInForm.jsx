import React, { useEffect, useState } from "react";
import { REGEXP_EMAIL } from "../../utils/constants";
import "./SignInForm.scss";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visiblity, setVisiblity] = useState(false);
  const onSubmitLogin = () => {
    if (!email || !password || !email.match(REGEXP_EMAIL)) return;
  };

  return (
    <div className="form-wrapper">
      <form className="sing-in-form">
        <div>
          <label htmlFor="email"> Email: </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password"> Password: </label>
          <input
            type={!visiblity ? "password" : "text"}
            id="password"
            value={password}
            onInput={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={onSubmitLogin}>
          login
        </button>
        <button type="button" onClick={() => setVisiblity((prev) => !prev)}>
          {" "}
          Toggle Password{" "}
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
