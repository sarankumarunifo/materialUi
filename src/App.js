import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Login from './Textfiled/login';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </Router>
      
      </header>
    </div>
  );
}

export default App;
