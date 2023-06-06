import { Route } from 'react-router-dom';
import LoginPage from './pages/login';
import Home from './pages/layout/home'
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Estoque from './pages/layout/estoque';
import Financeiro from './pages/layout/financeiro';
import EstoqueCreate from './pages/layout/estoque/create';
import NotFound from './pages/layout/not_found';
import FinanceiroCreateAPagar from './pages/layout/financeiro/create/create_a_pagar';
import FinanceiroCreateAReceber from './pages/layout/financeiro/create/create_a_receber';

export default function Routes(){
  return (
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route path="/home" component={Home} />
      <Route path="/estoque" component={Estoque} />
      <Route path="/estoque-create" component={EstoqueCreate} />
      <Route path="/financeiro" component={Financeiro} />
      <Route path="/financeiro-create-pagar" component={FinanceiroCreateAPagar} />
      <Route path="/financeiro-create-receber" component={FinanceiroCreateAReceber} />
      <Route path="/404" component={NotFound} />
    </Switch>
  )
}