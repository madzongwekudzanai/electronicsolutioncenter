import React, { useEffect } from "react";
import "./App.css";
import "./flaticon.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import ScrollToTop from "./components/layout/ScrollToTop";
import ScrollToTopButton from "./components/layout/ScrollToTopButton";
import Alert from "./components/layout/Alert";
import Landing from "./components/layout/Landing";
import RegisterUser from "./components/auth/RegisterUser";
import LoginUser from "./components/auth/LoginUser";
import ForgotUserPassword from "./components/auth/ForgotUserPassword";
import Routes from "./components/routing/Routes";
import Footer from "./components/layout/Footer";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import { setAuthToken } from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <div className="main-wrapper">
          <Header />
          <ScrollToTop />
          <ScrollToTopButton />
          <Alert />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={RegisterUser} />
            <Route exact path="/login" component={LoginUser} />
            <Route exact path="/reset" component={ForgotUserPassword} />
            <Route component={Routes} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
