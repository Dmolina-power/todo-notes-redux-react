import React from "react";
import Nav from "../../components/navbar";
import AddTodo from "../../components/addTodo";
import TodoList from "../../components/todoList";


function todoPage() {
  return (
    <>
      <Nav />
      <AddTodo />
      <TodoList />
      
    </>
  );
}

export default todoPage;
