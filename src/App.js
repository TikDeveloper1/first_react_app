import "./App.scss";
// import { FaUsers } from "react-icons/fa";
// import srcTestImage from './assets/images/test_picture.webp';
// import { ReactComponent as TestIcon } from './assets/images/test_svg.svg';
import {
  Routes,
  Route,
} from "react-router-dom";
import { SignInPage } from './pages/sign-in/SignInPage';
import { SignUpPage } from './pages/sign-up/SignUpPage';
import { NotFoundPage } from "./pages/404/NotFoundPage";
import TodosPage from "./pages/todos/TodosPage";
import Layout from "./layout/Layout";

const App = () => {
  return (
    <div className="app">
      <Layout>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/todos" element={<TodosPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
