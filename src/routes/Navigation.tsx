import {
  NavLink,
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
  
import { RegisterPage } from '../03-forms/pages/RegisterPage';
import logo from '../logo.svg';
  
  export const Navigation = () => {
    return (
      <Router>
        <div className="main-layout">
          <nav>
              <img src={ logo } alt="React Logo" />
            <ul>
              <li>
                <NavLink to="/" activeClassName="nav-active" exact>Home</NavLink>
              </li>
              <li>
                <NavLink to="/register" activeClassName="nav-active" exact>Register</NavLink>
              </li>
            </ul>
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/">
              <RegisterPage />
            </Route>
            <Route path="/register">
              <RegisterPage />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }