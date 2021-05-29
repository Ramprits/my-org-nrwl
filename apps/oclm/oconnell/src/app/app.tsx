import { Switch, Route } from 'react-router-dom';
import Home from './home/home';
import { Login, Register } from './auth';
export function App() {
  return (
    <Switch>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/register" component={Register}></Route>
      <Route exact path="/" component={Home}></Route>
    </Switch>
  );
}

export default App;
