// import { useState,useEffect } from 'react';
import "./assets/css/main.css";
import Layout from "./components/layout/Layout";

const App = () => {
  // const [ count, setCount ] = useState(5);
  // const [ count2, setCount2 ] = useState(10);
  // const [ arr ] = useState([ {id:1}, {id:2} ]);
  // const [ name ] = useState(() => {
  //   return 'Tigran'
  // });
  // const [isVisibleName,setIsVisibleName] = useState(true)

  // const addCount = (number) => {
  //   setCount((prev) => {
  //     return prev + number;
  //   })
  // }

  // console.log('rerenderComponent')


  // Component Mounts || Componenti stexcum Virtual Dom-um //
  // useEffect(() => {
  //   console.log('component mount')
  // }, [])

  // Component Unmounts || Componenti jnjum Virtual Dom-ic //
  // useEffect(() => {
  //   console.log('component mount')
  //   return () => {
  //     console.log('component unmount')
  //   }
  // }, [])


  // useEffect(() => {
  //   console.log('count updated')
    
  // }, [count,count2])





  return (
    <div className="app">
     <Layout>
      <p>
        Children
      </p>
        {/* <div>
            <pre>
              {
                JSON.stringify(arr)
              }
            </pre>
        </div>
        <div>
            <div>{count}</div>
            <div>{count2}</div>
            <button onClick={(e) => addCount(8)}>
                Add 8 to out Count
            </button>
            <button onClick={(e) => setCount2(prev => prev + 20)}>
                Add 20 to out Count
            </button>
        </div>
        
        <div>
              {isVisibleName && (
                <p>{name}</p>
              )}
            <button 
              onClick={() => setIsVisibleName(prev => !prev)}
                className={`base-btn ${isVisibleName ? 'visible' : 'hidden'}`}
            >
                  {isVisibleName ? "Hide" : "Show"}
            </button>
        </div> */}
  
     </Layout>
    </div>
  );
};

export default App;
