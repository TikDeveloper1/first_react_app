import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Todos from "../../components/todos/Todos";

const TodosPage = () => {
  const [state, setState] = useState();

  const getData = useCallback(async () => {
    const json = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await json.json();
    setState(data);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      <Link to="/sign-in"> Go Sign in</Link>
      <Todos />
    </>
  );
};

export default TodosPage;
