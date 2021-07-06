import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import AddItem from './components/AddItem';
import EditItem from './components/EditItem';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <div style={{ maxWidth: '30rem', margin: '4rem auto' }}>
      <GlobalProvider>
        <Router>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/add" component={AddItem} />
            <Route path="/edit/:id" component={EditItem} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
