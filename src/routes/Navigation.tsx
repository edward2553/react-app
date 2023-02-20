import {
  NavLink,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import logo from "../logo.svg";
import {
  FormikAbstractPage,
  FormikBasicPage,
  FormikComponents,
  FormikYupPage,
  RegisterPage,
} from "../03-forms/pages";

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/" activeClassName="nav-active" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" activeClassName="nav-active" exact>
                Register
              </NavLink>
            </li>
            <li>
              <NavLink to="/formik-basic" activeClassName="nav-active" exact>
                Formik basic
              </NavLink>
            </li>
            <li>
              <NavLink to="/formik-yup" activeClassName="nav-active" exact>
                Formik yup
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-components"
                activeClassName="nav-active"
                exact
              >
                Formik components
              </NavLink>
            </li>
            <li>
              <NavLink to="/formik-abstract" activeClassName="nav-active" exact>
                Formik abstract
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <ul>
              <li onClick={() => window.location.replace("/register")}>
                Custom Form
              </li>
              <li onClick={() => window.location.replace("/formik-basic")}>
                Formik basic
              </li>
              <li onClick={() => window.location.replace("/formik-yup")}>
                Formik yup
              </li>
              <li onClick={() => window.location.replace("/formik-components")}>
                Formik Components
              </li>
              <li onClick={() => window.location.replace("/formik-abstract")}>
                Formik Abstract
              </li>
            </ul>
          </Route>
          <Route exact path="/register">
            <RegisterPage />
          </Route>
          <Route exact path="/formik-basic">
            <FormikBasicPage />
          </Route>
          <Route exact path="/formik-yup">
            <FormikYupPage />
          </Route>
          <Route exact path="/formik-components">
            <FormikComponents />
          </Route>
          <Route exact path="/formik-abstract">
            <FormikAbstractPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
