import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../../redux/actions/todoActions";


export const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const [cheked, setCheked] = useState(false);

  const handleCheked = () => dispatch(toggleTodo(todo.id));

  useEffect(() => {
    setCheked(todo.completed);
  }, [todo]);

  return (
    <div className="form-check form-switch">
    <input className="form-check-input" type="checkbox" role="switch" onChange={handleCheked} checked={cheked}/>
    <label>{todo.content}</label>
  </div>
  );
};

export default Todo;
