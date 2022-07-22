import "./App.scss";
// import { FaUsers } from "react-icons/fa";
// import srcTestImage from './assets/images/test_picture.webp';
// import { ReactComponent as TestIcon } from './assets/images/test_svg.svg';
import {
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { SignInPage } from './pages/sign-in/SignInPage';
import { SignUpPage } from './pages/sign-up/SignUpPage';
import { NotFoundPage } from "./pages/404/NotFoundPage";

const App = () => {
  return (
    <div className="app">
      <h1 className="app-title">
        My App Title
        {/* <FaUsers className="app-title-svg" /> */}
      </h1>
      {/* <TestIcon /> */}
      {/* <img src={srcTestImage} alt="Test Pic" /> */}

      <NavLink to="/sign-in" className={({ isActive }) => isActive ? 'nav-item-active' : "nav-item"}>
        Sign-In
      </NavLink>
      <NavLink
        to="/sign-up"
        className={({ isActive }) => isActive ? 'nav-item-active' : "nav-item"}
      >
        Sign-Up
      </NavLink>

      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
