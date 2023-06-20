import { Route } from 'react-router-dom';
import LoginPage from './pages/login';
import Home from './pages/layout/home'
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Estoque from './pages/layout/estoque';
import Financeiro from './pages/layout/financeiro';
import EstoqueCreate from './pages/layout/estoque/create';
import NotFound from './pages/layout/not_found';
import Cliente from './pages/layout/cliente';
import FinanceiroCreateAPagar from './pages/layout/financeiro/create/create_a_pagar';
import FinanceiroCreateAReceber from './pages/layout/financeiro/create/create_a_receber';
import ClienteCreateFisica from './pages/layout/cliente/create/create_fisica';
import ClienteCreateJuridica from './pages/layout/cliente/create/create_juridica';
import Fornecedores from './pages/layout/fornecedores';
import createFornecedor from './pages/layout/fornecedores/create/create';
import EntradaSaidaPage from './pages/layout/estoque/entrada_saida';
import NewRegister from './pages/layout/estoque/create/new_register';

export default function Routes(){
  return (
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route path="/home" component={Home} />
      <Route path='/cliente' component={Cliente} />
      <Route path="/cliente-create-fisica" component={ClienteCreateFisica} />
      <Route path="/cliente-create-juridica" component={ClienteCreateJuridica} />
      <Route path="/estoque" component={Estoque} />
      <Route path="/estoque-create" component={EstoqueCreate} />
      <Route path="/financeiro" component={Financeiro} />
      <Route path="/financeiro-create-pagar" component={FinanceiroCreateAPagar} />
      <Route path="/financeiro-create-receber" component={FinanceiroCreateAReceber} />
      <Route path="/fornecedores" component={Fornecedores} />
      <Route path="/fornecedores-create" component={createFornecedor} />
      <Route path="/404" component={NotFound} />
      <Route path='/estoque-entrada-saida' component={EntradaSaidaPage} />
      <Route path='/estoque-novo-registro' component={NewRegister} />
    </Switch>
  )
}