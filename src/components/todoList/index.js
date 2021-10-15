import { useSelector } from "react-redux";
import { getTodosByVisibilityFilter } from "../../redux/selector";
import { Todo } from '../todo';


const TodoList = () => {
  const { todos, visibilityFilter } = useSelector(state => state);
  const filterTodos = getTodosByVisibilityFilter(todos, visibilityFilter);

  return (
    <div className="card">
    <div className="card-body">
    {filterTodos.length ? filterTodos.map(todo => (
        <Todo key={`todo-${todo.id}`} todo={todo} />
      )) : undefined}
       </div>
  </div>
  )
}

export default TodoList;


    
 

