import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement } from '../../redux/actions/countActions';


const Counter = () => {
    const dispatch = useDispatch()
  const counter  = useSelector(state => state.counter);
    return(
<div class="card">
  <div class="card-body text-center">
  <h5 class="card-title">Counter {counter}</h5>
  <button className="btn btn-success" onClick={() => dispatch(increment())}>+</button>
    <button className="btn btn-danger" onClick={() => dispatch(decrement())}>-</button>
  </div>
</div>
    )
}

export default Counter;