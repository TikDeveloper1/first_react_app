import "./assets/css/main.css";
import Layout from "./components/layout/Layout";
import SignInForm from "./components/sign-in-form/SignInForm";
import Tabs from "./components/tabs/Tabs";

const App = () => {
  return (
    <div className="app">
      <Layout>
        <Tabs />
        <SignInForm />
      </Layout>
    </div>
  );
};

export default App;
