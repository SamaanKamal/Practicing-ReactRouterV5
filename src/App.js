import { Switch } from 'react-router-dom';
import './App.css';
import { Route,Redirect } from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';
import QuoteDetail from './pages/QuoteDetail';
import Layout from './components/layout/Layout';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Layout>
     <Switch>
      <Route path='/' exact>
        <Redirect  to ='/quotes' />
      </Route>
      <Route path='/quotes' exact>
        <AllQuotes />
      </Route>
      <Route path='/new-quote'>
        <NewQuote />
      </Route>
      <Route path='/quotes/:quoteId'>
        <QuoteDetail />
      </Route>
      <Route path='*'>
        <NotFound />
      </Route>
     </Switch>
    </Layout >
  );
}

export default App;
