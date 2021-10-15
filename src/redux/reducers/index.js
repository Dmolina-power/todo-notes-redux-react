import counterReducer from './counter';
import todosReducer from './toDo';
import { combineReducers } from 'redux';




// index.js is combinging all reducers using redux combineReducers.

const rootReducer = combineReducers({
    counter: counterReducer,
    todos: todosReducer,
    
});

export default rootReducer;