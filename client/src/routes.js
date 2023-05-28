import { Route } from 'react-router-dom';
import LoginPage from './pages/login';
import Home from './pages/layout/home'
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Estoque from './pages/layout/estoque';

export default function Routes(){
  return (
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route path="/home" component={Home} />
      <Route path="/estoque" component={Estoque} />
    </Switch>
  )
}