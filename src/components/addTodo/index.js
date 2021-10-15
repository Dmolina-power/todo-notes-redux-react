import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions/todoActions";


const AddTodo = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(value));
    setValue("");
  };

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <form className="row g-3" onSubmit={handleSubmit}>
    <div className="col-auto">
      <h3>Add a Todo</h3>
    </div>
    <div className="col-auto">
      <input type="text"  className="form-control" value={value} onChange={handleInput}/>
    </div>
    <div className="col-auto">
      <button type="submit" className="btn btn-primary mb-3" disabled={!value}>Add</button>
    </div>
  </form>
  );
};

export default AddTodo;
