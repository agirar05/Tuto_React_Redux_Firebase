import { Route, Switch } from 'react-router';
import PrivateRoute from './Components/PrivateRoute.js';
import Signin from './Components/Signin.js';
import Todos from './Components/Todos.js';
import './App.css';

function App() {

  return (
    <div className='App'>
      <Switch>
		  <PrivateRoute path='/todos'>
			<Todos />
		  </PrivateRoute>
		  <Route path='/'>
			<Signin />
		  </Route>
	  </Switch>
    </div>
  );
}

export default App;
