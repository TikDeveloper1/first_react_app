import "./App.scss";
// import { FaUsers } from "react-icons/fa";
// import srcTestImage from './assets/images/test_picture.webp';
// import { ReactComponent as TestIcon } from './assets/images/test_svg.svg';
import {
  Routes,
  Route,
} from "react-router-dom";
// import { SignInPage } from './pages/sign-in/SignInPage';
// import { SignUpPage } from './pages/sign-up/SignUpPage';
import { NotFoundPage } from "./pages/404/NotFoundPage";
import TodosPage from "./pages/todos/TodosPage";
import TodosState from "./context/todos/TodosState";
import { lazy, Suspense } from "react";
import PageLoader from "./components/pageLoader/PageLoader";


const SignInPage = lazy(() => import(/* webpackChunkName: "SignIn-Page" */ './pages/sign-in/SignInPage'));
const SignUpPage = lazy(() => import(/* webpackChunkName: "SignUp-Page" */ './pages/sign-up/SignUpPage'));



const App = () => {



  return (

    <div className="app">
      <TodosState>

        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<SignInPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/todos" element={<TodosPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>


      </TodosState>

    </div >

  );
};

export default App;
