import { BrowserRouter as Router, Route } from 'react-router-dom';

//pages
import Home from './pages/home';
import Todos from './pages/todo';
import Counter from './pages/counter';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Home}/>
      <Route path='/todos' component={Todos}/>
      <Route path='/counter' component={Counter}/>
    </Router>
  );
}

export default App;
