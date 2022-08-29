import { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LoginRegister from '../Pages/LoginRegister';
import Home from '../Pages/Home';
import NotFound from '../Pages/NotFound';
import { AppCtx } from '../Context';

export default function Router() {
  const { token } = useContext(AppCtx);

  return (
    <Switch>
      <Redirect exact from="/" to="/login" />
      <Route path="/login">
        <LoginRegister />
      </Route>
      <Route path="/home">{token ? <Home /> : <Redirect to="/login" />}</Route>
      <Route path="*" component={NotFound} />
    </Switch>
  );
}
