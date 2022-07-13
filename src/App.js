import "./assets/css/main.css";
import Layout from "./components/layout/Layout";

const App = () => {
  const x = "Title1";
  const y = "Title2";
  const z = "Title3";

  return (
    <div className="app">
     <Layout x={x} y={y} z={z}>
       <div>asdasdasd</div>
       <div>asdasdasd</div> 
       <div>asdasdasd</div>
       <div>asdasdasd</div> 
       <div>asdasdasd</div>
       <div>asdasdasd</div> 
       <div>asdasdasd</div>
       <div>asdasdasd</div>
     </Layout>
    </div>
  );
};

export default App;
